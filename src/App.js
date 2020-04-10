import React,{Component} from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./client/app/Login"
import FormValidation from "./client/form/formValidation"
//estos imports van a estar en login
//y en ap se llama a ui de login


export default class App extends Component{
  render(){
    return (
      <div>
         <Router>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/new-user' component={FormValidation}/>
          </Switch>
        </Router>
      </div>
    )
  }
}


/*

import Navigation from "./client/app/Navigation"
import PageContent from "./client/app/PageContent"
import Footer from "./client/app/Footer"
import Sidemenu from "./client/app/Sidemenu"

<div className="nav-md">
        <div className="container body">
        <div className="main_container">
          <div className="col-md-3 left_col">
            <Sidemenu/>
          </div>
          <Navigation></Navigation>
          <PageContent></PageContent>
          <Footer></Footer>
        </div>
        </div>
     </div>
*/