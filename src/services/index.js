import request from '../utils/request';
export * from './discover.js';

const host = /localhost/.test(window.location.host)?'http://123.206.55.50:14000':'';
// 登陆接口
export function login(params){
  return request(`${host}/login/cellphone?phone=${params.phone}&password=${params.password}`)
}

// 获取歌曲播放文件
export function getUrl(id){
  return request(`${host}/song/url?id=${id}`)
}

// 获取歌曲详情
export function getDetail(id){
  return request(`${host}/song/detail?ids=${id}`)
}

// 获取歌词
export function getLyric(id){
  return request(`${host}/lyric?id=${id}`)
}