import React, { Component } from 'react'
import style from './index.module.css'
import icon from "./iconfont.module.css"
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class Login extends Component {
    state = {
        loading:false
    }

    login = (event) => {
        this.setState({
            loading:true
        })
        axios({
            method: 'post',
            url: '/out/register',
            headers:{
                'content-type':'application/json'
            },
            data:JSON.stringify({
                // username:this.username.current.value,
                // password:this.passwd.current.value
                username:'ZdeFr',
                password:'123456',
                email:'2735278841@qq.com'
            }),
            timeout:20000
        })
            .then(function (response) {
                console.log(response.status);
                console.log(response.data)
            })
            .catch((error)=>{
                console.log(error.response.status);
            })
    }

    username = React.createRef();
    passwd = React.createRef();
    render() {
        return (
            <div className={style.outer}>
                <div className={style.loginBox}>
                    <h2>用户登录</h2>
                    <div>
                        <span className={classNames(icon.iconfont, icon.iconUsername)}></span>
                        <input ref={this.username} className={style.inputBox} type="username" placeholder="用户名/邮箱" />
                    </div>
                    <div>
                        <span className={classNames(icon.iconfont, icon.iconPasswd)}></span>
                        <input ref={this.passwd} className={style.inputBox} type="password" placeholder="密码" />
                    </div>
                    <div className={style.checkBox}>
                        <input type="checkbox" id="rembu" />
                        <label htmlFor="rembu">记住账号 </label>
                        <input type="checkbox" id="rembp" />
                        <label htmlFor="rembp"> 记住密码</label>
                    </div>
                    {
                        this.state.loading?(
                        <div className={style.spinner}>
                            <div className={style.doubleBounce1}></div>
                            <div className={style.doubleBounce2}></div>
                        </div>)
                        :
                        <span onClick={this.login} className={classNames(icon.iconfont, icon.iconLogin, style.login)}></span>
                    }
                    <div className={style.footBox}>
                        <Link className={style.footer} to="/login/signup"> 注册账号！</Link>
                        <Link className={style.footer} to="/login/security">无法登录？</Link>
                    </div>
                </div>
            </div>
        )
    }
}
