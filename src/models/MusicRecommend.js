/**
 * 1.推荐歌单的命名空间
 * 2.引入请求数据的方法
 */
import {getMusicRecommend} from '../services/MusicRecommend'

export default {

    namespace: 'MusicRecommend',
  
    state: {
        musicData:null
    },
  
    subscriptions: {

    },
  
    effects: {
        *getMusicRecommendData({ payload }, { call, put }) {  // eslint-disable-line
              const response = yield call (getMusicRecommend)
              yield put({
                  type:"saveData",
                  payload:response.data.result
              })
        },
    },
  
    reducers: {
        saveData(state, action) {
          return { ...state, musicData:action.payload};
        },
    },
  
  };