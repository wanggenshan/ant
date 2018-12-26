import { shoplist } from '@/services/api';

export default {
  namespace: 'shoplist',

  state: {
    shopList: [],
  },

  effects: {
    *getShoplist(payload, { call, put }) {
      const response = yield call(shoplist);
      //   console.log('res...', response);
      yield put({
        type: 'shoplist',
        payload: response.data.list,
      });
    },
  },

  reducers: {
    shoplist(state, action) {
      return { ...state, shopList: action.payload };
    },
  },
};
