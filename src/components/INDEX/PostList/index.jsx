import React, { Component } from 'react'
import style from './index.module.css'
import classnames from 'classnames'
import PostNode from '../PostNode'

export default class PostList extends Component {
    render() {
        const { list } = this.props;
        return (
            <div className={style.outer}>
                <div className={style.sortNav}>
                    {list.sort === 'lastModify' ?
                        (
                            <div>
                                <button className={classnames(style.sortItem, style.active)}>发布时间</button>
                                <button className={style.sortItem}>热度</button>
                            </div>
                        ) :
                        (
                            <div>
                                <button className={style.sortItem}>发布时间</button>
                                <button className={classnames(style.sortItem, style.active)}>热度</button>
                            </div>
                        )
                    }
                </div>
                <div className={style.main}>
                    {
                        list.posts.map((item)=>{
                            return <PostNode data={item} key={item.id}/> 
                        })
                    }
                </div>
            </div>
        )
    }
}
