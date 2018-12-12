/**
 * 1.音乐播放的数据
 */

import request from '../utils/request'

import axios from 'axios'

export const getMusicData = () => {
    return axios.get("http://123.206.55.50:14000/search?keywords= 海阔天空").then(res => {
        return res
    })
}