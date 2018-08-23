import React, { Component } from 'react';
import 'bootstrap';
import MyComponent from './MyComponent';
import logo from './logo.svg';
import './App.css';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Search } from "./components/Search";
import { Art } from "./components/Art";
import { Pagination } from "./components/Pagination";
import { Footer } from "./components/Footer";
import { Visualisation } from "./components/Visualisation";
import SearchInput, {createFilter} from 'react-search-input';
import ReactTooltip from 'react-tooltip';
// import imagesLoaded from 'react-images-loaded';
// import imagesloaded from 'imagesloaded';
//import emails from './mails';


class App extends Component {

  constructor(props){
      super( props );   // SAM: need to call super() first
      this.state = {
          searchTerm: 'default',
          pageNumber: 1,
          femaleCountApp: 0,
          maleCountApp: 0
      }
      this.changeTermCallBack = this.changeTermCallBack.bind( this );
      this.pageNumberChange = this.pageNumberChange.bind(this);
      this.passGenderCountMale = this.passGenderCountMale.bind(this)
      this.passGenderCountFemale = this.passGenderCountFemale.bind(this);;
  }

  changeTermCallBack( term ) {
      console.log( "[1] searchTerm set in changeTermCallBack:" + term);
      this.setState( {searchTerm: term}, function() {console.log( "[2] searchTerm in state: " + this.state.searchTerm );} );
  }

  passGenderCountMale( male ) {
      console.log( "[1] gender count of male set in passGenderCountMale:" + male);
      this.setState( {maleCountApp: male}, function() {console.log( "[2] gender count of male in state: " + this.state.maleCountApp );} );
  }
  passGenderCountFemale( female ) {
      console.log( "[1] gender count of male set in passGenderCountMale:" + female);
      this.setState( {femaleCountApp: female}, function() {console.log( "[2] gender count of female in state: " + this.state.femaleCountApp );} );
  }

  pageNumberChange( page ) {
    // var pageNumberValue = this.state.pageNumber;
    // pageNumberValue + 1;
    this.setState({ pageNumber: this.state.pageNumber + 1});
    console.log("Page number: " + this.state.pageNumber);
    //this.state.pageNumber + 1;
  }

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
              <ReactTooltip />
            </div>
          </div>
          <div className="search">
            <Search changeTermCallBack={this.changeTermCallBack} />
          </div>
          {/* <div className="row">
            <div className="col-xs-12 col-xs-offset-1 visualisation-wrapper">
              <Visualisation maleCountApp={this.state.maleCountApp} femaleCountApp={this.state.femaleCountApp}/>
            </div>
          </div> */}
          <div className="row">
            <div className="col-xs-12 col-xs-offset-1 gallery-wrapper">
              <Art term={this.state.searchTerm} pageNumber={this.state.pageNumber} passGenderCountMale={this.passGenderCountMale} passGenderCountFemale={this.passGenderCountFemale}/>
            </div>
          </div>
          <div className="row pagination">
            <div className="pagination-list">
              <ul>
                <li><a onClick={this.pageNumberChange} href="#">Next Page</a></li>
              </ul>
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
