import React, { Component } from 'react'
import style from './index.module.css'
import icon from './iconfont.module.css'
import classNames from 'classnames';
import { Link } from 'react-router-dom';


export default class index extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className={style.outer}>
                <div className={style.authorBox}>
                    <img className={style.shot} src={data.shot} alt="xxxx"/>
                </div>
                <div className={style.contentBox}>
                    <Link className={style.title} to={`/post/${data.id}`}>{data.title}</Link>
                    {
                        data.tags.map((item)=>{
                            return <span className={style.tag}>{item}</span>
                        })
                    }
                    <br/>
                    <span className={style.author}>{data.author}</span>
                    <span className={style.replyCount}>发帖于<strong>{data.lastReply}</strong></span>
                    <span className={style.replyCount}>共<strong>{data.replyCount}</strong>层</span>
                    <span className={style.replyCount}>最新回复于<strong>{data.lastReply}</strong></span>
                </div>
                <div className={classNames(icon.iconfont, icon.iconStar, style.star)}></div>
            </div>
        )
    }
}
