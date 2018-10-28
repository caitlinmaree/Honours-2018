import React from "react";



export class Search extends React.Component {



 constructor(props) {
   super(props);
   this.state = {
     value: ''
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange( event ) {
     this.setState({value: event.target.value});
 }

 handleSubmit (event) {
   event.preventDefault();
   console.log('A query was submitted: ' + this.state.value);
   this.props.changeTermCallBack( this.state.value );
 }

 render() {
   return (
     <div>
       <form onSubmit={this.handleSubmit}>
         <input name="searchTerm" value={this.state.value} onChange={this.handleChange} className="input-field" />
         <input type="submit" value="search" className="submit-button" />
     </form>
     </div>
   )
 }
}
