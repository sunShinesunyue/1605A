import {getBannerData} from '../services/example'

export default {

    namespace: 'musicRoom',
  
    state: {
        musicBannerData:null
    },
  
    subscriptions: {
    
    },
  
    effects: {
        // 轮播图数据
        *axiosBannerData({ payload }, { call, put }) {
             const music_banner_data = yield call(getBannerData);
            //  console.log(music_banner_data.data.banners)
             yield put({
                 type:'saveBanner',
                 payload:music_banner_data.data.banners
             })
             
        }
    },
  
    reducers: {
        // 轮播图数据
        saveBanner(state,{payload}) {
            return{...state,musicBannerData:payload}
        }
    },
  
  };