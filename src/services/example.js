import request from '../utils/request';

import axios from 'axios';

export function query() {
  return request('/api/users');
}

// 求轮播图数据

export const getBannerData = () => {
     return axios.get("http://123.206.55.50:14000/banner").then(res => {
          return res
    })
}



