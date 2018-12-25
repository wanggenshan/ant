import React from 'react';
import { connect } from 'dva';
@connect(({ shoplist, loading }) => ({
  shoplist,
  loading: loading.models.shoplist,
}))
class Add extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch({ type: 'shoplist/fetch' });
  }
  render() {
    console.log('........', this.props);
    return <h1>12</h1>;
  }
}
export default Add;
