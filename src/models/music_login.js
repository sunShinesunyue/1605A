/**
 * 用户登录的命名空间
 */

import {getToken} from '../utils/userLogin'

import {routerRedux} from 'dva/router'

/**
 * 1.进行路由拦截
 */

export default {

    namespace: 'login',
  
    state: {
        loginData:null
    },
  
    // 路由判断
    subscriptions: {
        // setup({dispatch,history}) {
        //      return history.listen(({pathname})=> {
        //         if(pathname !== '/login' && !getToken()) {
        //             dispatch(
        //                 routerRedux.push({
        //                     pathname:'/login'
        //                 })
        //             )
        //         }
        //     }) 

        // }
    },
  
    // 进行数据请求
    effects: {
       *login({payload},{call,put}) {
           
       }
    },
  
    // 保存数据
    reducers: {
     
    },
  
  };