import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import style from './index.module.css'
import ModuleSwitch from '../../components/INDEX/ModuleSwitch'
import PostDisplay from './PostDisplay'
import PersonMes from '../../components/INDEX/PersonMes'
import Tools from "../../components/Tools"
import HotPost from '../../components/INDEX/HotPost'
import NewPost from '../../components/INDEX/NewPost'


export default class IndexPage extends Component {
    state = {
        module: 'game'
    }

    static getDerivedStateFromProps(nextProps, preState) {
        return {
            module: window.location.pathname.split('/').pop(),
        }
    }

    render() {
        return (
            <div className={style.outer}>
                <div className={style.aside}>
                </div>

                <div className={style.main}>
                    <ModuleSwitch />
                    <Route path="/index/:module" component={PostDisplay} />
                </div>
                <Tools />
                <div>
                    <PersonMes />
                    <HotPost></HotPost>
                    <NewPost />
                </div>
                <div className={style.aside}></div>
            </div>
        )
    }
}