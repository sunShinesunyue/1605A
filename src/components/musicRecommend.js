/**
 * 1.推荐歌单的组件
 * 2.连接命名空间
 */

import React,{Component} from 'react';

import { connect } from 'dva';

 import styles from './musicRecommend.css'

@connect(state => {
    let {
        musicData
    } = state.MusicRecommend
    return {
        musicData
    }
    
},
    dispatch => {
        return {
            getMusicRecommendData:payload => {
                dispatch({
                    type:'MusicRecommend/getMusicRecommendData'
                })
            }
        }
    }
)

class MusicRecommend extends Component {
        render() {
            let {
                musicData
            } = this.props;
            return (
                <div class='music_all'>
                    {
                        musicData && musicData.length>0 && musicData.map((val,ind) => {
                                return <div className='everyMusic'>
                                            <img className='music_pic' src={val.picUrl}></img>
                                            <p>{val.copywriter}</p>
                                </div>
                            
                        })
                    }
                </div>
            )
        }

        componentDidMount() {
            this.props.getMusicRecommendData()
        }
}

export default MusicRecommend