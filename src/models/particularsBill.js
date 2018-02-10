import { queryBillParticulars } from '../services/api';

export default {
  namespace: 'particularsBill',

  state: {
    keyWordData:[],
    mainListData:[],
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryBillParticulars);
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
