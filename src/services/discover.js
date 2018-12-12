import request from '../utils/request';

const host = /localhost/.test(window.location.host)?'http://123.206.55.50:14000':'';
// 获取banner
export function getBanner(){
  return request(`${host}/banner`)
}

// 获取首页每日个人推荐歌单
export function getRecommend(){
  return request(`${host}/personalized`)
}

// 获取每日推荐歌单
export function getRecommendResource(){
  return request(`${host}/recommend/songs`)
}

// 搜索歌曲
export function search(keywords){
  return request(`${host}/search?keywords=${keywords}`)
}