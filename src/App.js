import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Form from './Form';
import Navbar from './NavBar'
import Counter from './Counter';
import axios from 'axios';

class App extends Component{
  render(){
    this.state = {
        'user':null,
        'version':null
    }
    function handleLogin(){
        
    }
    return(
      <div className="App">
        <h1> Incedo INC </h1>
        <p>Welcome to CRO project</p>
        <Navbar/>
        <Counter/>
        <Form/>
      </div>
    );
  }
}

export default hot(module)(App);

