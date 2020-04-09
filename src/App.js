import React,{Component} from "react"
import Navigation from "./client/app/Navigation"
import PageContent from "./client/app/PageContent"
import Footer from "./client/app/Footer"
import Sidemenu from "./client/app/Sidemenu"


export default class App extends Component{
  render(){
    return (
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
    )
  }
}


