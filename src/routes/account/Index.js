import React from 'react';

import styles from './Index.css';

class Index extends React.PureComponent{
  render(){
    return <div className='account_wraper'>
                <div className='account_header'>
                    <span></span>
                    <span className='account_number'>账号</span>
                    <span className='account_yinpin'></span>
                </div>
                <div className='account_content'>

                    <div className='account_info'>
                        <p className='account_person'>
                            <span className='account_image'></span>
                            <span>尼古拉丁赵四</span>
                        </p>
                        <span className="sign_in">签到</span>
                    </div>

                    <div className='person_words'>
                        <p>
                          <span>动态</span>
                          <b>1</b>
                        </p>
                        <p>
                          <span>关注</span>
                          <b>12</b>
                        </p>
                        <p>
                          <span>粉丝</span>
                          <b>10</b>
                        </p>
                        <p className='my_account_info'>
                          <span className='my_account_pencil'></span>
                          <b>我的资料</b>
                        </p>
                    </div>

                    <div className='my_account_setting'>
                        <p>设置绑定手机号密码,可使用密码登录</p>
                        <span>立即设置</span>
                        <span>X</span>
                    </div>

                    <div className='my_account_message'>
                        <ul className='my_account_message_ul'>
                          <li className='my_account_li_first'>
                            <span className='myMessage'></span>
                            <span>我的消息</span>
                            <span className='myAnimail'></span>
                            <span className='acount_arrow'>></span>
                          </li>
                          <li className='my_account_li_second'>
                            <span className='myMessage_second'></span>
                            <span>会员中心</span>
                            <span className='myAnimail_second'></span>
                            <span className='acount_arrow'>></span>
                          </li>
                          <li className='my_account_li_third'>
                            <span className='myMessage_third'></span>
                            <span>商城</span>
                            <span className='acount_arrow'>></span>
                          </li>
                          <li className='my_account_li_four'>
                            <span className='myMessage_four'></span>
                            <span>游戏推荐：明日之后</span>
                            <span className='myAnimail_four'></span>
                            <span className='acount_arrow'>></span>
                          </li>
                          <li className='my_account_li_five'>
                            <span className='myMessage_five'></span>
                            <span>在线听歌：免流量</span>
                            <span className='acount_arrow'>></span>
                          </li>
                          <li className='my_account_li_six'>
                            <span className='myMessage_six'></span>
                            <span>设置</span>
                            <span className='acount_arrow'>></span>
                          </li>
                          <li className='my_account_li_seven'>
                            <span className='myMessage_seven'></span>
                            <span>扫一扫</span>
                            <span className='acount_arrow'>></span>
                          </li>
                          <li className='my_account_li_eight'>
                            <span className='myMessage_eight'></span>
                            <span>个性换肤</span>
                            <span className='acount_arrow'>></span>
                          </li>
                          <li className='my_account_li_nine'>
                            <span className='myMessage_nine'></span>
                            <span>夜间模式</span>
                            <span className='acount_arrow'>></span>
                          </li>
                        </ul>
                    </div>

                </div>
    </div>
  }
}

export default Index;
