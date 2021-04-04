import React, { Component } from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'

export default class NavPerson extends Component {

    PersonDisplay(pointer) {
        return (event) => {
            if (pointer === 'enter') {
                event.currentTarget.childNodes[1].style.display = 'block';
            } else {
                event.currentTarget.childNodes[1].style.display = 'none';
            }
        }
    }


    render() {
        const { person } = this.props;
        return (
            <div className={style.person} onMouseEnter={this.PersonDisplay('enter')} onMouseLeave={this.PersonDisplay('leave')}>
                <Link to='/person'>
                    <img className={style.personLogo} src={person.shot} alt='person' />
                </Link>
                <div className={style.list}>
                    <div className={style.mes}>
                        <div className={style.mesNode}>
                            <span>粉丝</span>
                            <br/>
                            <span className={style.num}>{person.fanCount}</span>
                        </div>
                        <div className={style.mesNode}>
                            <span>关注</span>
                            <br/>
                            <span className={style.num}>{person.followedCount}</span>
                        </div>
                        <div className={style.mesNode}>
                            <span>发帖</span>
                            <br/>
                            <span className={style.num}>{person.postCount}</span>
                        </div>
                    </div>
                    <Link className={style.listNode} to='/person'>个人中心</Link><br />
                    <Link className={style.listNode} to='/person'>账号设置</Link><br />
                    <Link className={style.listNode} to='/person'>意见反馈</Link><br />
                    <Link className={style.listNode} to='/person'>退出</Link>
                </div>
            </div>
        )
    }
}
