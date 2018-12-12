/**
 * 1.视频的页面
 * 2.连接命名空间
 */

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
    return(
      <div class='video_content'>
      <div className='music_top'>
            <span className='sing'></span>
            <input className='search' placeholder='猜你喜欢 浮生'/>
            <span className='autio'></span>
        </div>
        <div className='video_headr'>
            <span>推荐</span>
            <span>LOOK直播</span>
            <span>现场</span>
            <span>求佛</span>
            <span>翻唱</span>
            <span>听唱</span>
            <span>现场唱</span>
        </div>
        {
          viedoData && viedoData.length>0 && viedoData.map((val,ind) => {
              return <div>
                        <p className='video_pic'>
                          <img src={val.picUrl}></img>
                        </p>
                        <p>{val.copywriter}</p>
                        <div>
                          <span>悟空音乐随笔</span>
                          <span className='video_like'></span>
                          <span className='video_discuss'></span>
                          <span className='video_music'></span>
                        </div>
              </div>
          })
        }

      </div>
    )
  }
}

export default Index;


