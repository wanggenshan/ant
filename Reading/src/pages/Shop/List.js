import React from 'react';
import { Table, Divider, Tag, Modal, Button } from 'antd';
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
    key: '4',
    name: '西北旺地铁站店',
    city: '北京市',
    address: '北京西北旺地铁站',
    income: '0',
    state: 0,
    state: '正常营业',
    num: 0,
  },
  {
    key: '5',
    name: '西北旺地铁站店',
    city: '北京市',
    address: '北京西北旺地铁站',
    income: '0',
    state: 0,
    state: '正常营业',
    num: 0,
  },
  {
    key: '6',
    name: '西北旺地铁站店',
    city: '北京市',
    address: '北京西北旺地铁站',
    income: '0',
    state: 0,
    state: '正常营业',
    num: 0,
  },
];
class List extends React.PureComponent {
  render() {
    return <Table columns={columns} dataSource={data} pagination={{ pageSize: 2 }} />;
  }
}
export default List;
