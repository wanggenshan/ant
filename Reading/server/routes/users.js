var express = require('express');
var query = require('../db.js');
var router = express.Router();
var { geneToken, getIdFromToken } = require('../utils');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('server yuedu response with ok!');
});

// 登陆功能
router.post('/login', function(req, res, next) {
  query(
    'select id from user where username=? and password = ?',
    [req.body.username, req.body.password],
    function(error, results, fields) {
      if (error) {
        res.json({
          code: -1,
          msg: error.sqlMessage,
        });
      }
      if (!results[0] || !results[0].id) {
        res.json({
          code: -2,
          msg: '用户名或密码错误',
        });
      } else {
        var token = geneToken(results[0].id);
        query(
          'insert into token set ?',
          { uid: results[0].id, token, create_time: +new Date() },
          (error, result, fields) => {
            // let uid = results[0].id;
            // query('select rolername from roler,user_roler where roler.id=user_roler.rid and user_roler.uid=? and user_roler.status=1', [uid], (error, results, fields)=>{
            //   if (error){
            //     res.json({
            //       code: -1,
            //       msg: error.sqlMessage
            //     })
            //   }
            //   let roles = results.map(item=>item.rolername);
            //   if (!roles.length){
            //     roles = ['staff'];
            //   }
            //   res.json({
            //     code: 1,
            //     data: {
            //       auths: roles,
            //       token
            //     },
            //     msg: '用户权限获取成功'
            //   })
            //   // console.log('error...', error, results);
            // })

            res.json({
              code: 1,
              data: { token },
              msg: '登陆成功',
            });
            // console.log('results...', error, result);
          }
        );
      }
      // console.log('results...', error, results, req.body);
    }
  );
});

// 用户注册
router.post('/register', function(req, res, next) {
  query('select id from user where phone = ?', [req.body.phone], function(error, results, fields) {
    if (error) {
      res.json({
        code: -1,
        msg: error.sqlMessage,
      });
    }
    if (results[0] && results[0].id) {
      res.json({
        code: -2,
        msg: '该手机号已被注册，请输入您的手机号',
      });
    } else {
      query(
        'insert into user set ?',
        {
          username: req.body.username,
          password: req.body.password,
          phone: req.body.phone,
          avatar: 'http://img.52z.com/upload/news/image/20180721/20180721051014_12703.jpg',
          create_time: +new Date(),
        },
        (error, result, fields) => {
          console.log('result...', result, error);
          if (result.insertId) {
            var token = geneToken(result.insertId);
            query(
              'insert into token set ?',
              { uid: result.insertId, token, create_time: +new Date() },
              (error, result, fields) => {
                if (error) {
                  res.json({
                    code: -4,
                    msg: error.sqlMessage,
                  });
                } else {
                  res.json({
                    code: 1,
                    data: { token },
                    msg: '注册成功',
                  });
                }
                console.log('results...', error, result);
              }
            );
          } else {
            res.json({
              code: -3,
              msg: '注册用户失败',
            });
          }
          console.log('results...', error, result);
        }
      );
    }
    // console.log('results...', error, results, req.body);
  });
});

// 获取用户信息
router.get('/currentUser', (req, res) => {
  let token = req.header('X-Token');
  var uid = getIdFromToken(token);
  console.log('token...', token);
  query('select * from user where id = ?', [uid], (error, result, fields) => {
    if (error) {
      res.json({
        code: -1,
        msg: error.sqlMessage,
      });
    } else {
      if (result && result.length) {
        delete result[0].password;
        res.json({
          code: 1,
          data: result[0],
          msg: '获取用户信息成功',
        });
      } else {
        res.json({
          code: -2,
          msg: '该用户不存在',
        });
      }
    }
    console.log('results...', error, result);
  });
});
//发送短信验证码
// router.post('/smsCode', function(req, res, next) {
//   const SMSClient = require('@alicloud/sms-sdk');
//   // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
//   const accessKeyId = 'omFtRkaRs3Xu0pTW';
//   const secretAccessKey = 'a8LXFS3hXAU3vbtJqjEQh038j7iTDU';
//   //初始化sms_client
//   let smsClient = new SMSClient({ accessKeyId, secretAccessKey });
//   //发送短信
//   smsClient
//     .sendSMS({
//       PhoneNumbers: req.body.phone,
//       // 必填:待发送手机号。支持以逗号分隔的形式进行批量调用，批量上限为1000个手机号码,批量调用相对于单条调用及时性稍有延迟,验证码类型的短信推荐使用单条调用的方式；发送国际/港澳台消息时，接收号码格式为：国际区号+号码，如“85200000000”
//       SignName: 'jasonandjay',
//       // 必填:短信签名-可在短信控制台中找到
//       TemplateCode: 'SMS_144457028',
//       // 必填:短信模板-可在短信控制台中找到，发送国际/港澳台消息时，请使用国际/港澳台短信模版
//       TemplateParam: `{"code":${Math.floor(Math.random() * 99999) + 100000}}`,
//       // 可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时。
//     })
//     .then(
//       function(response) {
//         let { Code } = response;
//         if (Code === 'OK') {
//           //处理返回参数
//           console.log(response);
//           res.json({
//             code: 1,
//             msg: '短信发送成功',
//           });
//         }
//       },
//       function(err) {
//         console.log(err);
//         res.json({
//           code: -2,
//           msg: err.data && err.data.Message,
//         });
//       }
//     );
// });
module.exports = router;
