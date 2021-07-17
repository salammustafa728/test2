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
    <switch>
      <Route exact path='/'>
      <Main/>
      </Route>
      <Route exact path='/favorite'>
      <Favorite/>
      </Route>
    </switch>
    </BrowserRouter>
    <Footer/>
    </> 
    )
  }
}

export default App
