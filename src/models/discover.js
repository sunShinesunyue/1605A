import { routerRedux } from 'dva/router';
import {getBanner, getRecommendResource, search} from '../services/index';

export default {
  namespace: 'discover',
  state: {
    banners: [],
    songs: [],
    songCount: 0
  },

  effects: {
    * getBanner({payload}, {call, put}){
      let response = yield call(getBanner);
      console.log('banner response...', response);
      yield put({
        type: 'updateState',
        payload: response.data
      })
    },
  // 每日推荐
    * getRecommendResource(action, {call, put}){
      let response = yield call(getRecommendResource);
      console.log('recommend response...', response);
      // yield put({
      //   type: 'updateState',
      //   payload: response.data
      // })
    },
    // 搜索歌曲
    * search({payload}, {call, put}){
      let response = yield call(search, payload);
      console.log('search response...', response);
      yield put({
        type: 'updateState',
        payload: response.data.result
      })
    }
  },

  reducers: {
    updateState(state, action){
      console.log('action...', action);
      return {...state, ...action.payload}
    }
  }
}