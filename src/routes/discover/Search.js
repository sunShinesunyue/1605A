import React from 'react';
import {connect} from 'dva';
import {Link} from 'dva/router';
import styles from './Search.css';

@connect(({discover})=>{
  let {songs, songCount} = discover;
  console.log(discover)
  return {
    songs,
    songCount
  }
}, dispatch=>{
  return {
    search: payload=>{
      dispatch({
        type: 'discover/search',
        payload
      })
    },
    playAll: payload=>{
      dispatch({
        type: 'play/getUrls',
        payload
      })
    },
    // 听歌识曲
    distinguishSong: payload=>{
      console.log(payload)
      dispatch({
        type: 'play/distinguishSong',
        payload
      })
    }
  }
})
class Search extends React.PureComponent{
  componentDidMount(){
    // this.props.getRecommendResource();
  }

  // 搜索功能
  search(){
    let search = this.refs.search.value;
    if (search){
      this.props.search(search);
    }
  }

  goPlay(id){
    this.props.history.push('/play', id);
  }

  // 播放全部
  playAll(){
    this.props.playAll(this.props.songs.map(item=>item.id));
    this.props.history.push(`/play/${this.props.songs[0].id}`);
  }
  // 听歌识曲
  distinguishSong(){
    console.log('distin...', this.props);
    this.props.distinguishSong(this.props.songs.map(item=>item.id));
  }
  render(){
    console.log(this.props);
    let {songs} = this.props;
    return <div>
          <div className='cloud_music_header'>
              <span className='cloud_music_icon'></span>
              <input placeholder="搜索音乐,视频,歌词,电台" ref="search" className='cloud_music_search'></input>
              <button onClick={this.search.bind(this)} className='music_search_click'>搜索</button>
              <button onClick={this.playAll.bind(this)} className='music_play_click'>播放全部</button>
              <button onClick={this.distinguishSong.bind(this)}>听歌识曲</button>
          </div>
      <ul>{
        songs.map((item, index)=>{
          return <Link to={`/play/${item.id}`} key={index}>
            <li className={styles.item}>
              <p className='music_song_first_name'>
                <span className='music_list_heart'></span>
                <span className='music_list_download'></span>
                {item.name}
              </p>
              <p className='music_song_name'>{`${item.artists[0].name}-${item.album.name}`}</p>
            </li>
          </Link>
        })
      }</ul>
    </div>
  }
}

export default Search;