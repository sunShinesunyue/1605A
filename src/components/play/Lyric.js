import React from 'react';
import {toSec} from '../../utils/index';
import { Carousel } from 'antd-mobile';
import styles from './Lyric.css'

class Lyric extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      times: [],  // 存放歌词时间
      texts: [],   // 存放歌词文本
      current: 0
    }
  }

  // 补全歌词
  initLryic(lyrics){
    // 把歌词转成数组
    lyrics = lyrics.split('\n');
    // console.log('lyrics...................', lyrics);
    // 删除最后一项为空的歌词
    lyrics.filter(item=>item);
    lyrics = lyrics.map((item, index)=>{
      let arr = item.split(']');
      // 如果没有歌词，往后边找三项，补全歌词
      if (!arr[1] && index < lyrics.length-2){
        for (let i=index+1,len=index+3; i<len; i++){
          let temp = lyrics[i].split(']');
          if (temp[1]){
            arr[1] = temp[1];
            break;
          }
        }
        return arr.join(']');
      }else{
        return item;
      }
    })
    console.log('lyrics...', lyrics);
    this.formatLryic(lyrics);
  }

  // 解析歌词
  formatLryic(lyrics){
    let times = [],
        texts = [];
    lyrics.forEach(item=>{
      let arr = item.replace('[', '').split(']');
      times.push(toSec(arr[0]));
      texts.push({
        time: toSec(arr[0]),
        text: arr[1]
      })
    })

    this.setState({
      times,
      texts
    })
    console.log('times...', times, texts);
  }

  componentWillReceiveProps(nextProps, nextState){
    // if(!this.state.times.length){
      // this.initLryic();
    // }

    if (nextProps.lyric != this.props.lyric){
      this.initLryic(nextProps.lyric);
    }
    // console.log('props...', nextProps);
    for (let i=0,len=this.state.times.length; i<len; i++){
      if (nextProps.currentTime < this.state.times[i]){
        if (i-1 !== this.state.current){
          this.setState({
            current: i-1
          });
        }
        break;
      }
    }
  }

  render(){
    return  <Carousel
      selectedIndex={this.state.current}
      // autoplay={true}
      vertical={true}
      dots={false}
      autoplayInterval={500}
      infinite
    >{
      this.state.texts.map((item, index)=>{
        return <div className='song_text_wraper'>
                  <p key={index} className='song_Text'>{item.text}</p>
          </div>
      })
    }</Carousel>
  }
}

export default Lyric;