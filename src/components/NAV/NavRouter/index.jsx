import React, { Component } from 'react'
import style from './index.module.css'
import MyNavLink from '../../MyNavLink'
import NavPerson from '../NavPerson'
import { Link } from 'react-router-dom'

export default class NavRouter extends Component {
    render() {
        const { person } = this.props;

        return (
            <div className={style.outer}>
                <Link to='/index'><img className={style.logo} src="/ZGGGL.png" alt="logo"/></Link>
                <span className={style.fillBlock}></span>
                <div className={style.searchBox}>
                    <input type="text" className={style.searchText}/>
                    <input type="button" value="搜索" className={style.searchButton} />
                </div>
                {
                    person.id===undefined?
                    (<MyNavLink to="/register">注册</MyNavLink>  )
                    :
                    (<NavPerson person = {person}/>)
                }
                {
                    person.id===undefined&&
                    (<MyNavLink to="/login">登录</MyNavLink>  )
                }
            </div>
        )
    }
}
