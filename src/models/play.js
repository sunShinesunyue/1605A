import { routerRedux } from 'dva/router';
import {getUrl, getDetail, getLyric} from '../services/index';

export default {
  namespace: 'play',
  state: {
    id: 0,
    url: '',
    lyric: '',
    mode: 2,  // 1表示单曲循环，2表示随机播放，3表示顺序播放
    info: {}, // 歌曲信息
    detail: {}, // 歌曲详情
    current: 0, // 当前播放歌曲下标
    playList: JSON.parse(window.localStorage.getItem('playList'))||[],  // 播放列表
    distiguishList: JSON.parse(window.localStorage.getItem('distiguishList'))||[], // 听歌识曲列表
  },

  effects: {
    // 获取一首歌曲的播放文件和详情
    *getUrl({payload}, {call, put}){
      // 获取歌曲可播放文件
      let response = yield call(getUrl, payload);
      // 获取歌曲详情
      let detail = yield call(getDetail, payload);

      console.log('url response...', response);
      console.log('url detail...', detail);
      // console.log('url lyric...', lyric);

      let obj = {info:response.data.data[0]};
      obj.id = payload;
      obj.url = response.data.data[0].url;
      obj.detail = detail.data.songs[0];
      yield put({
        type: 'updateState',
        payload: obj
      })
    },
    // 获取歌曲的歌词
    * getLyric({payload}, {call, put}){
      // 获取歌词
      let lyric = yield call(getLyric, payload);
      yield put({
        type: 'updateState',
        payload: {
          lyric: lyric.data.lrc.lyric
        }
      })
    },
    // 获取一组歌曲的播放文件和详情
    * getUrls({payload}, {call, put}){
      console.log('getUrls payload', payload);
       // 获取歌曲可播放文件
      let responses = yield call(getUrl, payload.join(','));
      // 获取歌曲详情
      let details = yield call(getDetail, payload.join(','));
      console.log('urls response...', responses);
      console.log('urls detail...', details);
      responses = responses.data.data;
      details = details.data.songs;
      let playList = [];
      details.forEach(item=>{
        playList.push({
          detail: item,
          info: responses.filter(value=>value.id==item.id)[0]
        })
      })
      window.localStorage.setItem('playList', JSON.stringify(playList));
      yield put({
        type: 'updateState',
        payload: {playList}
      })
    },
    // 从播放列表中选取十首歌
    * distinguishSong({payload}, {call, put}){
      console.log('payload...', payload);
      // 随机选取十首歌
      let songList = [], ids = [];
      while(true){
        let id = Math.floor(Math.random()*payload.length);
        if (ids.indexOf(payload[id]) == -1){
          ids.push(payload[id]);
          if (ids.length == 10){
            break;
          }
        }
      }
      console.log('ids...', ids);
      // 获取歌曲可播放文件
      let responses = yield call(getUrl, ids.join(','));
      // 获取歌曲详情
      let details = yield call(getDetail, ids.join(','));
      console.log('urls response...', responses);
      console.log('urls detail...', details);
      responses = responses.data.data;
      details = details.data.songs;
      details.forEach(item=>{
        songList.push({
          name: item,
          url: responses.filter(value=>value.id==item.id)[0].url
        })
      })

      console.log('songList...', songList);
      yield put({
        type: 'updateState',
        payload: {
          distiguishList: songList
        }
      })
      window.localStorage.setItem('distiguishList', JSON.stringify(songList));
      yield put(routerRedux.push({
        pathname: `/distinguish`,
      }))
    }
  },

  reducers: {
    // 更新state
    updateState(state, action){
      console.log('action...', action);
      return {...state, ...action.payload}
    },
    // 切换歌曲
    changePlay(state, {payload}){
      let newState = {...state};
      // 如果没有播放列表，不再继续处理
      if (!state.playList.length || state.mode == 1){
        return newState;
      }
      // 随机播放
      if (state.mode == 2){
        let index = Math.floor(Math.random()*(state.playList.length-1));
        console.log('index...', index);
        newState.current = index;
      }else{
         // 顺序播放
        if (payload == 'prev'){
          if (state.current == 0){
            newState.current = state.playList.length-1;
          }else{
            newState.current--;
          }
        }else{
          if (state.current == state.playList.length-1){
            newState.current = 0;
          }else{
            newState.current++;
          }
        }
      }

      newState.id = state.playList[newState.current].info.id;
      newState.url = state.playList[newState.current].info.url;
      newState.info = state.playList[newState.current].info;
      newState.detail = state.playList[newState.current].detail;

      return newState;
    },
    // 改变播放模式
    changeMode(state){
      let newState = {...state};
      newState.mode = (newState.mode)%3+1;
      return newState;
    }
  }
}