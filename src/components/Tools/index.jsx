import React, { Component } from 'react'
import style from './index.module.css'
import icon from './iconfont.module.css'
import classNames from 'classnames'

export default class Tools extends Component {
    render() {
        return (
            <div className={style.outer}>
                <div className={classNames(icon.iconfont, icon.iconPost, style.post)}></div>
                <div className={classNames(icon.iconfont, icon.iconErweima, style.toolNode)}></div>
                <div className={classNames(icon.iconfont, icon.iconEarphone, style.toolNode)}></div>
                <div className={classNames(icon.iconfont, icon.iconStar, style.toolNode)}></div>
                <div className={classNames(icon.iconfont, icon.iconIctotop, style.toolNode)}></div>
            </div>
        )
    }
}
