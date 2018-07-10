import React, { Component } from 'react';
import 'bootstrap';
import MyComponent from './MyComponent';
import logo from './logo.svg';
import './App.css';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Art } from "./components/Art";


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-xs-offset-1">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-xs-offset-1">
            <Home/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-xs-offset-1">
            <Art/>
          </div>
        </div>
      </div>
    );
  }
}
console.log('hello console');
export default App;
