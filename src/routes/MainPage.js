import React ,{Component} from 'react';

import RouterView from '../router/RouterView';

import {NavLink} from 'dva/router';

import styles from './MainPage.css';

class MainPage extends Component{
  componentDidMount() {
 
      setTimeout(() => {
        this.setState({
          data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        });
      }, 100)
  }

  render(){
   
    return <React.Fragment>
      <div className='music_wraper'>
          <div className='music_center'>
              <RouterView routes={this.props.routes}></RouterView>
          </div>
   
          <div className='music_bottom'>
                <footer className='footer'>
                  <NavLink to="/main/discover">
                    <p></p>
                    <span>发现</span>
                  </NavLink>
                  <NavLink to="/main/video">
                    <p></p>
                    <span>视频</span>
                  </NavLink>
                  <NavLink to="/main/my">
                    <p></p>
                    <span>我的</span>
                  </NavLink>
                  <NavLink to="/main/friend">
                    <p></p>
                    <span>朋友</span>
                  </NavLink>
                  <NavLink to="/main/account">
                    <p></p>
                    <span>账号</span>
                  </NavLink>
            </footer>
          </div>
      </div>
    </React.Fragment>
  }
 
}

export default MainPage