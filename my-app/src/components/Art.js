import React from "react";
import Request from 'superagent';
import _ from 'lodash';
var request = require('superagent');
//var results = artResults();

export class Art extends React.Component {

  constructor(){
    super();
  }

  componentWillMount(){
    // Called the first time the component is loaded right before the component is added to the page
    this.results();
    var rest = require("restler");
    var queryTitle = "flower";
    rest.get("https://api.harvardartmuseums.org/object", {
    query: {
        apikey: "16cd3780-7e88-11e8-a539-1b0e0bda2aef",
        title: queryTitle,
        size: 20,
        hasimage: 0,
        fields: "objectnumber,title,dated,people,primaryimageurl",
    }
}) .on("complete", function(data, response) {

    // let artGender = data.records.map((pic) => {
    //   return (
    //     <div key={pic.people.gender}>
    //       <ul><li>{artGender}</li></ul>
    //     </div>
    //     )
    //   })

    //log results
    console.log( "NUM =" + this.num);
    console.log(data);
    //log first result
    setState( {art:data.records} );
    var results = data.records[0];
    //this.state.art = data.records;
    console.dir(results);
    //gender of first array result
    console.log(data.records[0].people[0].gender);
});

  }

  //render
  render(){
    const results = this.artResults;
    return ( <h1>{this.art}</h1> );
  }

  componentDidMount(){
    // Called after the component has been rendered into the page
  }

  componentWillReceiveProps(nextProps){
    // Called when the props provided to the component are changed
  }

  componentWillUpdate(nextProps, nextState){
    // Called when the props and/or state change
  }

  componentWillUnmount(){
    // Called when the component is removed
  }

  updateSearch(){
    this.search(this.refs.query.value);
  }



  results(query = "flower"){
    // var url = `https://api.artsy.net/api/search?q=${query}`;
    // var clientID = 'b012fc0e28fb7485158d',
    //     clientSecret = 'c927d4f7974c5a6500a48bd3a4aed36b',
    //     apiUrl = 'https://api.artsy.net/api/tokens/xapp_token',
    //     xappToken;
    //     console.log(xappToken);
    // Request.get(apiUrl).then((response) => {
    //   this.setState({
    //     movies: response.body.Search,
    //     total: response.body.totalResults
    //   });
    // });
  //   request
  // .post(apiUrl)
  // .send({ client_id: clientID, client_secret: clientSecret })
  // .end(function(res) {
  //   xappToken = res.body.token;
  }
}





// var clientID = 'b012fc0e28fb7485158d',
//     clientSecret = 'c927d4f7974c5a6500a48bd3a4aed36b',
//     apiUrl = 'https://api.artsy.net/api/tokens/xapp_token',
//     xappToken;
