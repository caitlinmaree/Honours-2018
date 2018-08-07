import React from "react";

export class Search extends React.Component {
  
 constructor(props) {
   super(props);
   this.state = {
     term: ''
   };
 }

 // handleInputChange = () => {
 //   // this.setState({
 //   //   //query: this.search.value
 //   //   query: ''
 //   // })
 //   this.state.query;
 //   console.log(this.query);
 // }
 //
 // changeSearchTerm = () => {
 //   this.value.setState.query;
 //   console.log(this.state.query);
 // }

 onChange = (event) => {
   this.setState({ term: event.target.value });
   console.log(this.state.term);
 }
 handleSubmit = (event) => {
   this.setState({ term: event.target.value });
   console.log(this.state.term);
 }

 render() {
   return (
     // <form>
     //   <input placeholder="Search for..." ref={input => this.search = input} onChange={this.changeSearchTerm}/>
     // </form>
     <div><form onSubmit={this.handleSubmit}>
       <input value={this.state.term} onChange={this.onChange} />
       <button>Search</button>
     </form>
       <p>{this.state.term}</p>
     </div>
   )
 }
}



///

// import React, { Component } from 'react';
// import './App.css';
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       term: '',
//       img: ''
//     };
//   }
//
//   onChange = (event) => {
//     this.setState({ term: event.target.value });
//   }
//   handleSubmit = (event) => {
//     event.preventDefault();
//     const api_key = 'dc6zaTOxFJmzC';
//     const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;
//     fetch(url)
//       .then(response => response.json())
//       .then(data => this.setState({ term:'', img: data.data[0].images.fixed_height.url }))
//       .catch(e => console.log('error', e));
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <form onSubmit={this.handleSubmit}>
//           <input value={this.state.term} onChange={this.onChange} />
//           <button>Search!</button>
//         </form>
//         <img src={this.state.img} height="200" alt={this.state.term} />
//       </div>
//     );
//   }
// }
