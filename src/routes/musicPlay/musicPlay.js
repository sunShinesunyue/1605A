/**
 * 1.音乐播放列表请求数据
 * 2.有自己的专属一套命名空间  逻辑层
 */

import React from 'react';

import styles from './musicPlay.css'

import {connect} from "dva"

@connect(state => {
    let {
        musicData
    } = state.musicPlay
    return {
        musicData
    }
},dispatch => {
    return {
        getMusicData : payload => {
             dispatch({
                 type:'musicPlay/getMusicData'
             })   
        }
    }
})

class MusicPlay extends React.PureComponent{
    // 内部数据
    data = {
        songMusic:null
    }

    componentDidMount() {
        this.props.getMusicData()  // 调用命名空间里面的方法
        
    }

  render(){
        let {
            musicData
        } = this.props
        return(
            <div className='musicPlay_wraper'>
                <input className='musicPlay_search' placeholder='搜索歌手/作品' ref='music_search'/>
                <button className='search_button' onClick={this.musicClick.bind(this)}>搜索</button>
                <div className='songList'>
                        {
                            musicData && musicData.length>0 &&musicData.map((val,ind) => {
                                return <div>
                                    <dl className='song_dl'>
                                        <dt><img src={val.album.artist.img1v1Url} className='song_pic'/></dt>
                                        <dd>
                                            <p>{val.name}</p>
                                            <p>{val.artists[0].name}</p>
                                        </dd>
                                    </dl>
                                </div>
                            })
                        }
                </div>
            
            </div>
        )
  }

  // 点击事件
  musicClick() {
        // console.log(this.refs.music_search.value)
  } 


}

export default MusicPlay;