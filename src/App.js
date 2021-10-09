import React, { Component } from 'react'
import { BrowserRouter , Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/Main';
import Favorite from './Components/Favorite';


export class App extends Component {
  render() {
    return (
      <>
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path='/' component={Main}/>
      {/* <Main/>
      </Route> */}
      <Route exact path='/favorite' component={Favorite}/>
      {/* <Favorite />
      </Route> */}
    </Switch>
    </BrowserRouter>
    <Footer/>
    </> 
    )
  }
}

export default App
