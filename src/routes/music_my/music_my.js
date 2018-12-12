import React from 'react';

import styles from './music_my.css'

class musicMy extends React.PureComponent{
  render(){
    return <div class='my_music_wraper'>
                <div className='music_top'>
                        <span className='my_sing'></span>
                        <span class='my_music'>我的音乐</span>
                        <span className='my_autio'></span>
                        <div>
                        </div>
                </div>   
                <div className='my_music_content'>
                      <dl className='my_music_dl'>
                        <dt className='my_music_dtO'></dt>
                        <dd className='my_music_dd'>
                            <span>本地音乐</span>
                            <span className='arrow'>1 ></span>
                        </dd>
                      </dl>
                      <dl className='my_music_dl'>
                        <dt className='my_music_dt1'></dt>
                        <dd className='my_music_dd'>
                            <span>最近播放</span>
                            <span className='arrow'>100 ></span>
                        </dd>
                      </dl>
                      <dl className='my_music_dl'>
                        <dt className='my_music_dt2'></dt>
                        <dd className='my_music_dd'>
                            <span>我的电台</span>
                            <span className='arrow'>1 ></span>
                        </dd>
                      </dl>
                      <dl className='my_music_dl'>
                        <dt className='my_music_dt3'></dt>
                        <dd className='my_music_dd'>
                            <span>我的收藏</span>
                            <span className='arrow'>专辑/歌手/视频/专栏 ></span>
                        </dd>
                      </dl>
                      <dl className='my_music_dl'>
                        <dt className='my_music_dt4'></dt>
                        <dd className='my_music_dd'>
                            <span>Sati空间</span>
                            <span className='arrow'>特别的聆听模式 ></span>
                        </dd>
                      </dl>

                      <div className='my_music_create'>
                            <p>
                              <span>V</span>
                              <span className='span_first'>我创建的歌单(1)</span>
                            </p>
                            <sapn>...</sapn>
                      </div>

                      <div className='my_like_music'>
                            <span  className='my_like_music_icon'></span>
                            <p className='all'>
                                <h3>我喜欢的音乐</h3>
                                <h4>6首,已下载1首</h4>
                            </p>
                      </div>

                      <div className='my_music_create'>
                            <p>
                              <span>V</span>
                              <span className='span_first'>我创建的歌单(1)</span>
                            </p>
                            <sapn>...</sapn>
                      </div>

                      <div className='my_like_young'>
                            <span className='my_like_young_icon'></span>
                            <p className='all'>
                                <h3>我喜欢的音乐</h3>
                                <h4>6首,已下载1首</h4>
                            </p>
                      </div>
                </div>  
    </div>
  }
}

export default musicMy;