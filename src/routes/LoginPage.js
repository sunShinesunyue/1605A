import React from 'react';

import styles from './LoginPage.css'

import {connect} from 'dva'

// 连接命名空间
// @connect({

// },{

// })

class LoginPage extends React.PureComponent{

    constructor(props) {
        super(props);

        this.state = {
            phone:'',
            pwd:''
        }
        
        
    }

    userSubmit() {
        let {
            phone,
            pwd
        } = this.state;
        if(/\d/.test(phone) && /\S{6,20}/.test(pwd)) {
            return
        } else {
            alert('请输入正确的用户格式')
        }
    }
    
    render() {
        let {
            phone,
            pwd
        } = this.state;

        return(
            <div class='login_wraper'>
                <div>
                    <input className='music_input' maxLength='11' placeholder='请输入手机号码' value={phone} onChange={e => this.setState({phone:e.target.value})}/>        
                </div>
                <div>
                <input className='music_input'text='password' placeholder='请输入密码' value={pwd} onChange={e => this.setState({pwd:e.target.value})}/>
                </div>
                <button className='music_button' onClick={this.userSubmit.bind(this)}>登录</button>    
            </div>
        )
    }


}

export default LoginPage;


