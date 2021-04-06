import React, { Component } from 'react'
import NavRouter from "./components/NAV/NavRouter"
import {Switch,Route,Redirect} from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import Footer from './components/INDEX/Footer'
import Login from './components/Login'
export default class App extends Component {
  render() {


    // let person = {
    //   shot:'/logo512.png',
    //   username:"sheeenber",
    //   describe:"MiBoy",
    //   fanCount:100,
    //   followedCount:20,
    //   postCount:1
    // }

    // sessionStorage.setItem("token", JSON.stringify(person));
    return (
      <div>
        {
          (!sessionStorage.getItem("token"))&&<Login/>
        }
        
        <NavRouter/>
        <Switch>
          <Route path="/index" component={IndexPage}/>
          <Redirect to='/index'/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}
