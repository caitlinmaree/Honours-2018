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

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange = (event) => {
    // this.setState({ term: event.target.value });
    // console.log(this.state.term);
     var searchResult = event.target.value;
     console.log(searchResult);
  }
  handleSubmit = (event) => {
    alert('A query was submitted: ' + this.state.term);
    event.preventDefault();
  }

  render() {
    var searchResult = 'flower';
    var pageNumber = 1;
    return (
      <div className="app">
        {/* Header */}
        <div className="row header-nav">
          <div className="col-xs-12 col-xs-offset-1">
            <Header/>
          </div>
        </div>
        {/* Body */}
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-xs-offset-1">
              <Home/>
            </div>
          </div>
          {/* Search bar */}
          <div className="search">
            <div><form onSubmit={this.onChange}>
              <input value={searchResult} onChange={this.onChange} />
              <button>Search</button>
            </form>
              <p>{searchResult}</p>
            </div>
          </div>
          {/* Art Gallery */}
          <div className="row">
            <div className="col-xs-12 col-xs-offset-1 gallery-wrapper">
              <Art searchResult={searchResult} pageNumber={pageNumber}/>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="row pagination">
          <div className="pagination-list">
            <ul>
              {/* <li><a onClick={pageNumber = 1} href="#">1</a></li>
                <li><a onClick={pageNumber = 2} href="#">2</a></li>
                <li><a onClick={pageNumber = 3} href="#">3</a></li>
              <li><a onClick={pageNumber = 4} href="#">4</a></li> */}
              <li><a onClick={pageNumber++} href="#">Next Page</a></li>
            </ul>
          </div>
        </div>
        <div className="row footer">
          <div className="col-xs-12 footer-container col-xs-offset-1">
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}
console.log('hello console');
export default App;
