import React, { Component } from 'react'
import style from "./index.module.css"
import MyNavLink from '../../MyNavLink'

export default class ModuleSwitch extends Component {
    render() {
        return (
            <div className={style.outer}>
                <MyNavLink className={style.innerBlock} to="/index/science">科技</MyNavLink>
                <MyNavLink className={style.innerBlock} to="/index/game">游戏</MyNavLink>
                <MyNavLink className={style.innerBlock} to="/index/finance">金融</MyNavLink>
            </div>
        )
    }
}
