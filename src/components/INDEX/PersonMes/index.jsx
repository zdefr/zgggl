import React, { Component } from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'
import icon from './iconfont.module.css'
import classNames from 'classnames'
export default class PersonMes extends Component {
    render() {
        const person = JSON.parse(sessionStorage.getItem("token"))
        console.log(person)
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
                            <span>粉丝</span>
                            <br />
                            <span className={style.num}>{person.fanCount}</span>
                        </div>
                        <div className={style.mesNode}>
                            <span>关注</span>
                            <br />
                            <span className={style.num}>{person.followedCount}</span>
                        </div>
                        <div className={style.mesNode}>
                            <span>发帖</span>
                            <br />
                            <span className={style.num}>{person.postCount}</span>
                        </div>
                    </div>
            </div>
        )
    }
}
