import React from 'react';
import styles from './PlayHeader.css';

export default props=>{
  return <React.Fragment>
    <div className='music_play_wraper'>
      <h1>网易云音乐页面</h1>
      <h2 className='music_paly_song_name'>{props.name}</h2>
      <div className='music_bg'>
        <img className={props.isPlay?styles.picUrl:styles.disable} src={props.picUrl}/>
      </div>
    </div>
  </React.Fragment>
}