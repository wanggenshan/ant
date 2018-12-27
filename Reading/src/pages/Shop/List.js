import React from 'react';
import { connect } from 'dva';
import {
  Table,
  Divider,
  Tag,
  Modal,
  Button,
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  AutoComplete,
} from 'antd';

//表单
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
//列表
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
        <a href="javascript:void(0);" onClick={this.showModal}>
          编辑
        </a>
        <Divider type="vertical" />
        <a href="javascript:void(0);" onClick={this.hideModal}>
          关闭
        </a>
      </span>
    ),
  },
];
// const data = [
//   {
//     key: '1',
//     name: '西北旺地铁站店',
//     city: '北京市',
//     address: '北京西北旺地铁站',
//     income: '0',
//     state: '正常营业',
//     num: 0,
//   },
// ];
@connect(
  state => {
    let { shopList } = state.shoplist;
    // console.log('Liststate...', state.shoplist);
    return {
      shopList,
    };
  },
  dispatch => {
    return {
      getShoplist: () => {
        dispatch({
          type: 'shoplist/getShoplist',
        });
      },
    };
  }
)
class List extends React.PureComponent {
  componentDidMount() {
    this.props.getShoplist();
  }
  columns = [
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
          <a href="javascript:void(0);" onClick={this.showModal}>
            编辑
          </a>
          <Divider type="vertical" />
          <a href="javascript:void(0);" onClick={this.hideModal}>
            关闭
          </a>
        </span>
      ),
    },
  ];
  state = {
    visible: false,
    confirmDirty: false,
    autoCompleteResult: [],
  };
  //表单
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log('门店名称........ ', values);
      }
    });
  };
  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };
  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };
  //弹框
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  hideModal = () => {
    this.setState({
      visible: false,
    });
  };
  handleOk = e => {
    this.setState({
      visible: false,
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    //表单
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );
    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <React.Fragment>
        <Table
          columns={this.columns}
          dataSource={this.props.shopList}
          pagination={{ pageSize: 5 }}
        />
        ;
        <Modal
          title="店铺信息编辑"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form onSubmit={this.handleSubmit}>
            <Form.Item {...formItemLayout} label="门店名称">
              {getFieldDecorator('text', {
                rules: [
                  {
                    // type: 'text',
                    message: 'The input is not valid !',
                  },
                  { required: true, message: '请编辑门店名称!' },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="住址">
              {getFieldDecorator('residence', {
                rules: [
                  {
                    required: true,
                    message: '请编辑门店住址!',
                  },
                  {
                    validator: this.validateToNextPassword,
                  },
                ],
              })(<Input />)}
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              label={
                <span>
                  门店状态
                  {/* <Tooltip title="What do you want others to call you?">
                    <Icon type="question-circle-o" />
                  </Tooltip> */}
                </span>
              }
            >
              {getFieldDecorator('nickname', {
                rules: [{ required: true, message: '请输入门店状态!', whitespace: true }],
              })(<Input />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </React.Fragment>
    );
  }
}
export default Form.create()(List);
