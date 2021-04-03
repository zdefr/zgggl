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
        if (person.id == null) {
            return (
                <div className={style.person}>
                    <Link to='/person'>
                        <img className={style.personLogo} src='%PUBLIC_URL%/ZGGGL.png' alt='person' />
                    </Link>
                </div>
            );
        }
        return (
            <div className={style.person} onMouseEnter={this.PersonDisplay('enter')} onMouseLeave={this.PersonDisplay('leave')}>
                <Link to='/person'>
                    <img className={style.personLogo} src={person.logo} alt='person' />
                </Link>
                <div className={style.list}>
                    <Link className={style.listNode} to='/person'>个人中心</Link><br />
                    <Link className={style.listNode} to='/person'>账号设置</Link><br />
                    <Link className={style.listNode} to='/person'>意见反馈</Link><br />
                    <Link className={style.listNode} to='/person'>退出</Link>
                </div>
            </div>
        )
    }
}
