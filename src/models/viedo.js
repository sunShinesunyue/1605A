/**
 * 1.视频的命名空间
 * 2.引入请求视频数据的方法
 */
import {getViedoData} from '../services/viedo'

export default {

    namespace: 'viedo',
  
    state: {
        viedoData:null
    },
  
    subscriptions: {

    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
            const res = yield call(getViedoData);
            yield put({
              type:'save',
              payload:res.data.result
            })
      },
    },
  
    reducers: {
      save(state, action) {
        return { ...state, viedoData:action.payload };
      },
    },
  
  };