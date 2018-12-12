import React from 'react';

import {connect} from 'dva'

import styles from './Index.css';

@connect(
  state => {
      let {
        viedoData
      } = state.viedo
    return {
      viedoData
    }
  },  
  dispatch => {
    return {
      fetch:payload => {
        dispatch({
          type:'viedo/fetch',
          payload
        })
      }
    }
  }
)

class Index extends React.PureComponent{

  componentDidMount() {
    this.props.fetch()
  }

  render(){
    let {
      viedoData
    } = this.props;
    console.log(viedoData)
    return <div className='friend_wraper'>
                <div className='music_top'>
                        <span className='friend_sing'></span>
                        <div className='friend_button'>
                                <span className='friend_dynamic'>动态</span>
                                <span className='friend_nearby'><span className='nearby_child'>附近</span></span>
                        </div>
                        <span className='friend_autio'></span>
                        <div>
                        </div>
                </div> 

                <div className='friend_secondTop'>
                      <p className='friend_dynamic'>
                          <span className='friend_dynamic_child'></span>
                          <span>发动态</span>
                      </p>
                      <p className='friend_viedo'>
                          <span className='friend_viedo_child'></span>
                          <span>发布视频</span>
                      </p>
                </div>

                <div className='frient_content'>
                {
                    viedoData && viedoData.length>0 && viedoData.map((val,ind) => {
                        return <div>
                                  <p className='video_pic'>
                                    <img src={val.picUrl}></img>
                                  </p>
                                  <p>{val.copywriter}</p>
                        </div>
                    })
        }
                </div>
    </div>
  }
}

export default Index;

