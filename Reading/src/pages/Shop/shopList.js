import React from 'react';
import style from './shopList.css';
import { List, Avatar } from 'antd';
export default class shopList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        {
          id: '8',
        },
        {
          id: '8',
        },
        {
          id: '8',
        },
        {
          id: '8',
        },
        {
          id: '8',
        },
        {
          id: '8',
        },
        {
          id: '8',
        },
      ],
    };
  }
  render() {
    let { listData } = this.props;
    return (
      <React.Fragment>
        <div className={style.cont}>
          <span>ID</span>
          <span>门店名称</span>
          <span>住址</span>
          <span>城市</span>
          <span>门店图片</span>
          <span>收入</span>
          <span>门店状态</span>
          <span>门店物品数量</span>
          <span>操作</span>
        </div>
        <div className={style.conts}>
          <span>ID</span>
          <span>门店名称</span>
          <span>住址</span>
          <span>城市</span>
          <span>门店图片</span>
          <span>收入</span>
          <span>门店状态</span>
          <span>门店物品数量</span>
          <p>
            <span>编辑</span>
            <span>关闭</span>
          </p>
        </div>
        <div className={style.conts}>
          <span>ID</span>
          <span>门店名称</span>
          <span>住址</span>
          <span>城市</span>
          <span>门店图片</span>
          <span>收入</span>
          <span>门店状态</span>
          <span>门店物品数量</span>
          <p>
            <span>编辑</span>
            <span>关闭</span>
          </p>
        </div>
        <div className={style.conts}>
          <span>ID</span>
          <span>门店名称</span>
          <span>住址</span>
          <span>城市</span>
          <span>门店图片</span>
          <span>收入</span>
          <span>门店状态</span>
          <span>门店物品数量</span>
          <p>
            <span>编辑</span>
            <span>关闭</span>
          </p>
        </div>
        <div className={style.make}>
          <div className={style.marks}>
            <h3>编辑</h3>
            <span>X</span>
            <div>门店名称</div>
            <div>住址</div>
            <div>城市</div>
            <div>门店状态</div>
            <div>门店信息</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
