import React, { Component } from 'react'
import NavRouter from "./components/NAV/NavRouter"
import {Switch,Route,Redirect} from 'react-router-dom'
import IndexPage from './pages/IndexPage'

export default class App extends Component {
  render() {


    let person = {
      logo:'/mm.jpeg',
      id:undefined
    }
    return (
      <div>
        <NavRouter person={person}/>
        <Switch>
          <Route path="/index" component={IndexPage}/>
          <Redirect to='/index/game'/>
        </Switch>
      </div>
    )
  }
}
