import { queryNetExamineParticulars } from '../services/api';

export default {
  namespace: 'particularsNetExamine',

  state: {
    netExamineData:[],
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryNetExamineParticulars);
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
