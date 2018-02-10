import { queryOperatorsParticulars } from '../services/api';

export default {
  namespace: 'particularsOperators',

  state: {
    callData:[],
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryOperatorsParticulars);
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
