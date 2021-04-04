import React, { Component } from 'react'
import NavRouter from "./components/NAV/NavRouter"
import {Switch,Route,Redirect} from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import Footer from './components/INDEX/Footer'

export default class App extends Component {
  render() {


    let person = {
      shot:'/mm.jpeg',
      username:"sheeenber",
      describe:"MiBoy",
      fanCount:100,
      followedCount:20,
      postCount:1
    }

    sessionStorage.setItem("token", JSON.stringify(person));
    return (
      <div>
        <NavRouter person={person}/>
        <Switch>
          <Route path="/index" component={IndexPage}/>
          <Redirect to='/index'/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}
