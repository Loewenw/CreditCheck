import { queryTaobaoParticulars } from '../services/api';

export default {
  namespace: 'particularsTaobao',

  state: {
    taobaoBasicData:[],
    taobaoReceivingData:[],
    taobaoExpendData:[],
    taobaoDetailedData:[],
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryTaobaoParticulars);
      yield put({
        type: 'show',
        payload: response,
      });
    },
  },

  reducers: {
    show(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    }
  },
};
