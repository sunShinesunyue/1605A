import React ,{Component} from 'react';

import styles from './Index.css';

import { Carousel, WingBlank } from 'antd-mobile';

import {connect} from 'dva';

import MusicRecommend from '../../components/musicRecommend'

class Index extends Component{
  components = {
    MusicRecommend
  }

  // 内部数据
  state = {
    imgHeight: 176
  }

  componentDidMount() {
      setTimeout(() => {
        this.setState({
          data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        });
      }, 100)

      let {
        dispatch
      } = this.props;
      dispatch({
          type:'musicRoom/axiosBannerData'
      })
  }

  render(){
    let {
      musicBannerData
    } = this.props;

    return <React.Fragment>
      <div className='music_wraper'>
          <div className='music_center'>
                <div className='music_top'>
                        <span className='sing'></span>
                        <input className='search' placeholder='猜你喜欢 浮生'/>
                        <span className='autio'></span>
                        <div>
                        </div>
                </div>
                <div className='music_tab'>
                        <span>个性推荐</span>
                        <span>主播电台</span>
                </div>

                <div className='music_swiper'>
                    <WingBlank>
                        <Carousel
                          autoplay={false}
                          infinite
                          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                          afterChange={index => console.log('slide to', index)}
                        >
                          {musicBannerData && musicBannerData.length>0 && musicBannerData.map(val => (
                            <a
                              key={val}
                              href="http://www.alipay.com"
                              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                              <img
                                src={val.imageUrl}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                  // fire window resize event to change height
                                  window.dispatchEvent(new Event('resize'));
                                  this.setState({ imgHeight: 'auto' });
                                }}
                              />
                            </a>
                          ))}
                        </Carousel>
                  </WingBlank>
                </div>

                <div className="icon_header">
                        <p></p>
                        <span>私人FM</span>
                        <p></p> 
                        <span>每日推荐</span>
                        <p></p>  
                        <span>歌单</span>  
                        <p></p>
                        <span>排行榜</span>         
                </div>

                <div className='music_recommend'>
                     <MusicRecommend />
                </div>
          </div>

      </div>
      
      

    </React.Fragment>
  }

  // tab切换点击事件
  // tabClick=(type) => {
  //     console.log(type)
  // }

  // tabClickSecond=() => {
  //       console.log('kkk')
  // }
  
}

// 抽离
const mapStateToProps = state => {
      let {
        musicRoom
      } = state
      return {
        ...musicRoom
      }
}

export default connect(mapStateToProps)(Index)