import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from "./index.module.css"


export default class index extends Component {
    render() {
        let { children, to } = this.props; 

        return (
            <NavLink activeClassName={style.active} className={style.NavButton} to={to}>{children}</NavLink>
        )
    }
}
