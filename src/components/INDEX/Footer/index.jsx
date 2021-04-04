import React, { Component } from 'react'
import style from './index.module.css'

export default class Footer extends Component {
    render() {
        return (
            <div className={style.outer}>
                <div>创意工作者们的社区</div> 
                <div>World is powered by solitude</div>
                <div>VERSION: 0.1 2021/4/3 20:45</div>
                <div>♥ Do have faith in what you're doing.</div>
            </div>
        )
    }
}
