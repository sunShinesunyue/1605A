/**
 * 音乐播放列表的命名空间
 * 2.引入方法
 */

import {getMusicData} from "../services/musicPlay"

export default {

    namespace: 'musicPlay',
  
    state: {
        musicData:null
    },
  
    subscriptions: {
   
    },
  
    effects: {
        *getMusicData({payload},{call,put}) {
            const res = yield call(getMusicData)
            yield put({
                type:"saveMusicData",
                payload:res.data.result
            })
        }
    },
  
    reducers: {
      saveMusicData(state, action) {
        return { ...state, musicData:action.payload.songs };
      },
    },
  
  };