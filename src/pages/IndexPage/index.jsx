import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import style from './index.module.css'
import ModuleSwitch from '../../components/INDEX/ModuleSwitch'
import PostDisplay from './PostDisplay'
import PersonMes from '../../components/INDEX/PersonMes'

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
                <PersonMes/>
                <div className={style.main}>
                    <ModuleSwitch />
                    <Route path="/index/:module" component={PostDisplay} />
                </div>
                <div className={style.aside}></div>
            </div>
        )
    }
}