import React, { Component } from 'react'
import style from "./index.module.css"
import { NavLink } from 'react-router-dom'

export default class ModuleSwitch extends Component {
    render() {
        return (
            <div className={style.outer}>
                <NavLink activeClassName={style.active} className={style.innerBlock} to="/index/science">科技</NavLink>
              
                <NavLink activeClassName={style.active} className={style.innerBlock} to="/index/game">游戏</NavLink>
                
                <NavLink activeClassName={style.active} className={style.innerBlock} to="/index/finance">金融</NavLink>
               
                <NavLink activeClassName={style.active} className={style.innerBlock} to="/index/mla">马里奥</NavLink>
                
                <NavLink activeClassName={style.active} className={style.innerBlock} to="/index/car">汽车</NavLink>
               
                <NavLink activeClassName={style.active} className={style.innerBlock} to="/index/te">体育</NavLink>
            </div>
        )
    }
}
