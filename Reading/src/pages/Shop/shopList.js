import React from 'react';
import style from './shopList.css';
import { Table, Divider, Tag } from 'antd';
const columns = [
  {
    title: 'ID',
    dataIndex: 'ID',
    key: 'ID',
    render: text => <a href="javascript:;">8</a>,
  },
  {
    title: '门店名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '地址',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: '收入',
    dataIndex: 'income',
    key: 'income',
  },
  {
    title: '门店状态',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: '门店商品数量',
    dataIndex: 'num',
    key: 'num',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:void(0);">编辑</a>
        <Divider type="vertical" />
        <a href="javascript:void(0);">关闭</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: '西北旺地铁站店',
    city: '北京市',
    address: '北京西北旺地铁站',
    income: '0',
    state: '正常营业',
    num: 0,
  },
  {
    key: '2',
    name: '西北旺地铁站店',
    city: '北京市',
    address: '北京西北旺地铁站',
    income: '0',
    state: '门店关门',
    num: 0,
  },
  {
    key: '3',
    name: '西北旺地铁站店',
    city: '北京市',
    address: '北京西北旺地铁站',
    income: '0',
    state: 0,
    state: '正常营业',
    num: 0,
  },
  {
    key: '3',
    name: '西北旺地铁站店',
    city: '北京市',
    address: '北京西北旺地铁站',
    income: '0',
    state: 0,
    state: '正常营业',
    num: 0,
  },
  {
    key: '3',
    name: '西北旺地铁站店',
    city: '北京市',
    address: '北京西北旺地铁站',
    income: '0',
    state: 0,
    state: '正常营业',
    num: 0,
  },
  {
    key: '3',
    name: '西北旺地铁站店',
    city: '北京市',
    address: '北京西北旺地铁站',
    income: '0',
    state: 0,
    state: '正常营业',
    num: 0,
  },
];
class shopList extends React.PureComponent {
  render() {
    return <Table columns={columns} dataSource={data} />;
    //     return (
    //       <React.Fragment>
    //         <div className={style.cont}>
    //           <span>ID</span>
    //           <span>门店名称</span>
    //           <span>住址</span>
    //           <span>城市</span>
    //           <span>门店图片</span>
    //           <span>收入</span>
    //           <span>门店状态</span>
    //           <span>门店物品数量</span>
    //           <span>操作</span>
    //         </div>

    //         <div className={style.make}>
    //           <div className={style.marks}>
    //             <h3>编辑</h3>
    //             <span>X</span>
    //             <div>门店名称</div>
    //             <div>住址</div>
    //             <div>城市</div>
    //             <div>门店状态</div>
    //             <div>门店信息</div>
    //           </div>
    //         </div>
    //       </React.Fragment>
    //     );
  }
}
export default shopList;
