import React from 'react';
import dynamic from 'dva/dynamic';

// 引入一级路由
// import LoginPage from '../routes/LoginPage';
// import MainPage from '../routes/MainPage';
// import playPag from '../routes/playPage/playPage';
// import Distinguish from '../routes/listenPage'; // 引入


// 引入二级路由
// import AccountPage from '../routes/account/Index';
// import DiscoverPage from '../routes/discover/Index';
// import FriendPage from '../routes/friend/Index';
// import VideoPage from '../routes/video/Index';
// import musicMy from '../routes/music_my/music_my'
// import SearchPage from '../routes/discover/Search';

// 一级路由路由按需加载
const LoginPage = dynamic({
    component: () => import('../routes/LoginPage')
})
const MainPage = dynamic({
    component: () => import('../routes/MainPage')
})
const playPag = dynamic({
    component: () => import('../routes/playPage/playPage')
})
const Distinguish = dynamic({
    component: () => import('../routes/listenPage')
})

// 二级路由路由按需加载
const AccountPage = dynamic({
    component:() => import('../routes/account/Index')
})
const DiscoverPage = dynamic({
  component:() => import('../routes/discover/Index')
})
const FriendPage  = dynamic({
  component:() => import('../routes/friend/Index')
})
const VideoPage = dynamic({
  component:() => import('../routes/video/Index')
})
const musicMy = dynamic({
  component:() => import('../routes/music_my/music_my')
})
const SearchPage = dynamic({
  component:() => import('../routes/discover/Search')
})


export default {
  routes: [{
    path: '/login',
    component: LoginPage
  },
  {
    path: '/play/:id?',
    component: playPag
  },
  {
    path:'/distinguish/:id?',
    component:Distinguish
  },
  {
    path: '/main',
    component: MainPage,
    children: [{
      path: '/main/account',
      component: AccountPage
    },{
      path: '/main/discover',
      component: DiscoverPage
    },{
      path: '/main/friend',
      component: FriendPage
    },{
      path: '/main/my',
      component: musicMy
    },{
      path: '/main/video',
      component: VideoPage
    },{
      path: '/main/search',
      component: SearchPage
    }]
  },{
    path: '/',
    redirect: '/main/discover'
  }]
}
