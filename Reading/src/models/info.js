/**
 * 最后插入个人信息的数据
 */
import { addInfo } from '@/services/api';

export default {
  namespace: 'info',

  state: {
    // infoSpace: [],
  },

  effects: {
    *infoData({ obj }, { call, put }) {
      const response = yield call(addInfo, obj);
    },
  },
};
