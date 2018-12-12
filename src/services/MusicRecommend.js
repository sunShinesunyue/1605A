/**
 * 1.推荐歌单 请求数据
 */

import request from '../utils/request';

import axios from 'axios';

export function query() {
  return request('/api/users');
}

// 求轮播图数据

export const getMusicRecommend = () => {
     return axios.get("http://123.206.55.50:14000/personalized").then(res => {
          return res
    })
}


