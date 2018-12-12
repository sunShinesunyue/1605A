import React ,{Component}from 'react';
import {connect} from 'dva';
import { Carousel } from 'antd-mobile';
import styles from './playPage.css';
import {formatTime} from '../../utils/index';

import PlayHeader from '../../components/play/PlayHeader';// 音乐封面

import Lyric from '../../components/play/Lyric';// 音乐歌词

import AudioProcess from '../../components/play/AudioProcess';// 音乐音波

@connect(({play})=>{
  console.log('play..', play);
  return play
}, dispatch=>{
  return {
    getUrl: id=>{
      dispatch({
        type: 'play/getUrl',
        payload: id
      })
    },
    chanagePlay: payload=>{
      dispatch({
        type: 'play/changePlay',
        payload
      })
    },
    changeMode: ()=>{
      dispatch({
        type: 'play/changeMode',
      })
    },
    changeLyric: payload=>{
      dispatch({
        type: 'play/getLyric',
        payload
      })
    }
  }
})


class playPag extends Component {
  constructor(){
    super();
    this.state = {
      progress: 0,
      isPlay: true
    }
  }

  componentDidMount(){
    let id = this.props.match.params.id;
    this.props.getUrl(id);
    console.log(id)
  }

  componentWillReceiveProps(nextProps){
    // 只要判断下一次的id和上一次的id不一样就要重新获取歌词
    if (nextProps.id != this.props.id){
      this.props.changeLyric(nextProps.id);
    }
  }

  // 播放进度更新触发的钩子
  timeUpdate(){
    let progress = this.refs.audio.currentTime/this.refs.audio.duration*100;
    this.setState({
        progress
    }, ()=>{
      if (this.state.progress == 100){
        // 自动播放下一首
        this.props.chanagePlay('next');
        if (!this.props.playList.length){
          this.refs.audio.pause();
          this.refs.audio.currentTime = 0;
          this.refs.audio.play();
        }
      }
    })
  }

  // 获取总时长
  get duration(){
    if (this.refs.audio && this.refs.audio.duration){
      return formatTime(this.refs.audio.duration);
    }
    return '00:00';
  }

  // 获取当前播放时间
  get currentTime(){
    if (this.refs.audio && this.refs.audio.currentTime){
      return formatTime(this.refs.audio.currentTime);
    }
    return '00:00';
  }

  // 获取播放模式
  get mode(){
    return this.props.mode==1?<span className='singla_song'></span>:this.props.mode==2?<span className='random_song'></span>:<span className='singla_only'></span>
  }

  // 播放/暂停
  changeState(){
    this.setState({
      isPlay: !this.state.isPlay
    }, ()=>{
      this.state.isPlay?this.refs.audio.play():this.refs.audio.pause();
    })
  }

  // 触摸进度条事件
  touchStart(){
    this.setState({
      isPlay: false
    }, ()=>{
      this.refs.audio.pause();
    })
  }
  // 移动过进度条
  touchMove(e){
    // console.log('触摸事件...', e.touches);
    let touch = e.touches[0],
        progressEle = this.refs.progress;
    let progress = (touch.pageX - progressEle.offsetLeft)/progressEle.offsetWidth;
    if (progress>1){
      progress = 1;
    }
    if (progress<0){
      progress = 0;
    }
    this.setState({
      progress: progress*100
    }, ()=>{
      this.refs.audio.currentTime = progress*this.refs.audio.duration
    })
    // console.log('progress..', progress, progress*this.refs.audio.duration);
  }
  // 离开进度条
  touchEnd(){
    this.setState({
      isPlay: true
    }, ()=>{
      this.refs.audio.play();
    })
  }
  // 切换歌曲
  chanagePlay(type){
    this.props.chanagePlay(type);
  }

  // 切换播放模式
  changeMode(){
    this.props.changeMode();
  }

  render(){
    // console.log('play page...', this.props);
    if (!Object.keys(this.props.detail).length){
      return null;
    }
    return <div class='song_wraper'>
      <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          <PlayHeader name={this.props.detail.name} isPlay={this.state.isPlay} picUrl={this.props.detail.al.picUrl}/>
          <Lyric lyric={this.props.lyric} currentTime={this.refs.audio && this.refs.audio.currentTime}/>
          <AudioProcess audio={this.refs.audio}/>
        </Carousel>
      <div>
        <div>
          <span>{this.currentTime}</span>
          <div className={styles.progress}
            onTouchStart={this.touchStart.bind(this)}
            onTouchMove={this.touchMove.bind(this)}
            onTouchEnd={this.touchEnd.bind(this)}>
            <p ref="progress">
              <span style={{width:this.state.progress+'%'}}></span>
            </p>
          </div>
          <span>{this.duration}</span>
        </div>

        <div>
          <button onClick={()=>this.changeMode()}>{this.mode}</button>
          <button onClick={()=>this.chanagePlay('prev')}><span className='prev_song'></span></button>
          <button onClick={this.changeState.bind(this)}>{this.state.isPlay?<span className='song_paused'></span>:<span className='song_play'></span>}</button>
          <button onClick={()=>this.chanagePlay('next')}><span className='next_song'></span></button>
        </div>
      </div>
      {this.props.url?<audio crossOrigin="anonymous" src={this.props.url} autoPlay ref="audio" onTimeUpdate={()=>this.timeUpdate()}></audio>:null}
      <ul>{
        this.props.playList.map((item, index)=>{
          return <li className={styles.item} key={index}>
              <img src={item.detail.al.picUrl}/>
              <div>
                <p>{item.detail.name}</p>
                <p>{`${item.detail.al.name}`}</p>
              </div>
            </li>
        })
      }</ul>
    </div>
  }
}

export default playPag;