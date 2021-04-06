import React, { Component } from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'
import icon from './iconfont.module.css'
import classNames from 'classnames'
export default class PersonMes extends Component {
    render() {
        const person = JSON.parse(sessionStorage.getItem("token"))
        if(person){
        return (
            <div className={style.outer}>
                <div className={style.user}>
                    <Link to="/person" className={style.shotBox}>
                        <img className={style.shot} src={person.shot} alt="xxx" />
                    </Link>
                    <div className={style.usernameBox}>
                        <Link to="/person" className={style.username}>{person.username}</Link>
                        <br />
                        <span className={style.describe}><span className={classNames(icon.iconfont, icon.iconVIP)}></span> {person.describe}</span>
                    </div>
                </div>
                    <div className={style.mes}>
                        <div className={style.mesNode}>
                            
                            <span className={style.num}>{person.fanCount}</span>
                            <br/>
                            <span>粉丝</span>
                        </div>
                        <div className={style.mesNode}>
                            
                            <span className={style.num}>{person.followedCount}</span>
                            <br/>
                            <span>关注</span>
                        </div>
                        <div className={style.mesNodeR}>
                           
                            <span className={style.num}>{person.postCount}</span> 
                            <br/>
                            <span>发帖</span>
                        </div>
                    </div>
            </div>
        )}else{
            return (
                <div className={style.outer}>
                <div className={style.user}>
                    <Link to="/person" className={style.shotBox}>
                        <img className={style.shot} src="/logo512.png" alt="xxx" />
                    </Link>
                    <div className={style.usernameBox}>
                        <Link to="/person" className={style.username}>请登录</Link>
                        <br />
                        <span className={style.describe}><span className={classNames(icon.iconfont, icon.iconVIP)}></span> 未闻花名</span>
                    </div>
                </div>
                    <div className={style.mes}>
                        <div className={style.mesNode}>
                            
                            <span className={style.num}>-</span>
                            <br/>
                            <span>粉丝</span>
                        </div>
                        <div className={style.mesNode}>
                            
                            <span className={style.num}>-</span>
                            <br/>
                            <span>关注</span>
                        </div>
                        <div className={style.mesNodeR}>
                           
                            <span className={style.num}>-</span> 
                            <br/>
                            <span>发帖</span>
                        </div>
                    </div>
            </div>
            )
        }
    }
}
