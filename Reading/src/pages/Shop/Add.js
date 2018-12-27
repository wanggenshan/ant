import React from 'react';

import { connect } from 'dva';

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
// 引入数据仓
// import Info from '../../models/info'
const FormItem = Form.Item;
const Option = Select.Option;
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
  {
    value: '菲律宾',
    label: '柬埔寨',
    children: [
      {
        value: '越南',
        label: '老挝',
        children: [
          {
            value: '菲律宾铁猴子',
            label: '大树下的故乡',
          },
        ],
      },
    ],
  },
];

@Form.create()
class AddShop extends React.PureComponent {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = e => {
    let { dispatch } = this.props;
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      console.log(values);
      if (!err) {
        let obj = {
          name: values.name,
          address: values.address,
          info: values.info,
          img: '',
          city: values.city,
        };
        dispatch({
          type: 'info/infoData',
          obj,
        });
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

  render() {
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
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="店铺名称" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入' }],
          })(<Input placeholder="请输入" />)}
        </FormItem>
        <FormItem label="门店状态" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          {getFieldDecorator('info', {
            rules: [{ required: true, message: '请输入' }],
          })(<Input placeholder="请输入" />)}
        </FormItem>
        <FormItem label="店铺信息" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          {getFieldDecorator('StoreInformation', {
            rules: [{ required: true, message: '请输入' }],
          })(<Input placeholder="请输入" />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.info)
  return {
    prop: state.info,
  };
};
export default connect(mapStateToProps)(AddShop);
