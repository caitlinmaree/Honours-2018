import React, { Component } from 'react';
import 'bootstrap';
import MyComponent from './MyComponent';
import logo from './logo.svg';
import './App.css';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Search } from "./components/Search";
import { Art } from "./components/art/Art";
import { Pagination } from "./components/Pagination";
import { Footer } from "./components/Footer";
import SearchInput, {createFilter} from 'react-search-input';
// import imagesLoaded from 'react-images-loaded';
// import imagesloaded from 'imagesloaded';
//import emails from './mails';


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="row header-nav">
          <div className="col-xs-12 col-xs-offset-1">
            <Header/>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-xs-offset-1">
              <Home/>
            </div>
          </div>
          <div className="search">
            <Search/>
          </div>
          <div className="row">
            <div className="col-xs-12 col-xs-offset-1 gallery-wrapper">
              <Art/>
            </div>
          </div>
          <div className="row pagination">
            <div className="col-xs-12 col-xs-offset-1">
              <Pagination/>
            </div>
          </div>
          <div className="row footer">
            <div className="col-xs-12 footer-container col-xs-offset-1">
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
console.log('hello console');
export default App;
