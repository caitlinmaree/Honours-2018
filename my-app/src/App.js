import React, { Component } from 'react';
import 'bootstrap';
import './App.css';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Search } from "./components/Search";
import { Art } from "./components/Art";
import { Index } from "./components/Index";
import { Footer } from "./components/Footer";
import { Visualisation } from "./components/Visualisation";
import ReactTooltip from 'react-tooltip';


class App extends Component {

  constructor(props){
      super( props );
      this.state = {
          searchTerm: 'flower',
          pageNumber: 1,
          femaleCountApp: 0,
          maleCountApp: 0,
          prototypeClass: 'prototypezero',
          size: 20
      }
      // This binding
      this.changeTermCallBack = this.changeTermCallBack.bind( this );
      this.pageNumberChange = this.pageNumberChange.bind(this);
      this.passGenderCountMale = this.passGenderCountMale.bind(this);
      this.passGenderCountFemale = this.passGenderCountFemale.bind(this);
      this.changePrototype = this.changePrototype.bind(this);
      this.pageNumberCount = this.pageNumberCount.bind(this);
  }

  // Search term callback
  changeTermCallBack( term ) {
      console.log( "[1] searchTerm set in changeTermCallBack:" + term);
      this.setState( {searchTerm: term}, function() {console.log( "[2] searchTerm in state: " + this.state.searchTerm );} );
  }

  // Prototype switch callback
  changePrototype(prototype) {
    this.setState( {prototypeClass: prototype}, function() {
      console.log("[2] prototype in app.js: " + this.state.prototypeClass);
      this.pageNumberCount();
    });
  }

  //change number of items on page for proto 5
  pageNumberCount() {
    if (this.state.prototypeClass === 'prototypeFive') {
      this.setState( {size: 100},() => console.log(this.state.size));
    }
    else {
      this.setState( {size: 20}, () => console.log(this.state.size));
    }
  }

  // Gender count male callback
  passGenderCountMale( male ) {
      console.log( "[3] gender count of male set in passGenderCountMale:" + male);
      this.setState( {maleCountApp: male}, function() {console.log( "[2] gender count of male in state: " + this.state.maleCountApp );} );
  }

  // Gender count female callback
  passGenderCountFemale( female ) {
      console.log( "[4] gender count of male set in passGenderCountMale:" + female);
      this.setState( {femaleCountApp: female}, function() {console.log( "[2] gender count of female in state: " + this.state.femaleCountApp );} );
  }

  // Page number change callback
  pageNumberChange( page ) {
    this.setState({ pageNumber: this.state.pageNumber + 1});
    console.log("Page number: " + this.state.pageNumber);
  }

  //App render
  render() {
    return (
      <div className="app" id={this.state.prototypeClass}>
        <div className="row header-nav">
          <div className="col-xs-12 col-xs-offset-1">
            <Header/>
            <Index changePrototype={this.changePrototype}/>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-xs-offset-1 intro-wrapper">
              <Home/>
              <ReactTooltip />

            </div>
          </div>
          <div id="art-wrapper">
            <div className="search">
              <Search changeTermCallBack={this.changeTermCallBack} />
            </div>
            <div className="row">
              <div className="col-xs-12 col-xs-offset-1 visualisation-wrapper">
                <Visualisation maleCountApp={this.state.maleCountApp} femaleCountApp={this.state.femaleCountApp}/>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-xs-offset-1 gallery-wrapper">
                <Art term={this.state.searchTerm} size={this.state.size} pageNumber={this.state.pageNumber} passGenderCountMale={this.passGenderCountMale} passGenderCountFemale={this.passGenderCountFemale}/>
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
      </div>
    );
  }
}
export default App;
