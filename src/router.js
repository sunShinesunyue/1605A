import React from 'react';
import { Router} from 'dva/router';

// 引入路由配置项
import config from './router/index';
// 引入封装的路由组件
import RouterView from './router/RouterView';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <React.Fragment>
        <RouterView routes={config.routes}></RouterView>
      </React.Fragment>
    </Router>
  );
}

export default RouterConfig;

