import request from '../utils/request';

import axios from 'axios';

export function query() {
  return request('/api/users');
}

// 求视频数据

export const getViedoData = () => {
     return axios.get("http://123.206.55.50:14000/personalized/mv").then(res => {
          return res
    })
}