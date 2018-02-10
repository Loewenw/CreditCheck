import { queryBasicParticulars, queryMainParticulars} from '../services/api';

export default {
  namespace: 'particulars',

  state: {
    userMessage: [],
    greyListData: [],
    historyApplyData:[],
    contactApplyData:[],
    idCardMessage:[],
    bioassay:[],
  },

  effects: {
    *fetchBasic(_, { call, put }) {
      const response = yield call(queryBasicParticulars);
      yield put({
        type: 'show',
        payload: response,
      });
    },
    *fetchMain(_, { call, put }) {
      const response = yield call(queryMainParticulars);
      yield put({
        type: 'show',
        payload: response,
      });
    }
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
