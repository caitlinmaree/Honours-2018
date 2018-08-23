import React from "react";
//import Request from 'superagent';
//import _ from 'lodash';
//var request = require('superagent');
//var results = artResults();

export class Art extends React.Component {

  constructor(props){
      super( props );   // SAM: need to call super() first

      this.state = {
          records: [],
          undefinedGender: 0,
          male: 0,
          female: 0
      };
      this.captureGenderCount = this.captureGenderCount.bind(this);
  }

  captureGenderCount() {
    // var femaleCount= this.state.female;
    // var maleCount= this.state.male;
    // console.log("Capturing the amount of female: " + femaleCount);
    this.props.passGenderCountMale( this.state.male );
    this.props.passGenderCountFemale( this.state.female );
  }

  componentWillMount(props){
    var queryTitle = this.props.term;
    var page = this.props.pageNumber;
    console.log( "[Art.js] query is now: " + queryTitle );
    console.log( "[Art.js] page number is now: " + page );
    this.doQuery( this, queryTitle );
    this.doQuery( this, page );
  }

  doQuery(that, queryTitle, page) {
      var rest = require("restler");
      rest.get("https://api.harvardartmuseums.org/object", {
        query: {
            apikey: "16cd3780-7e88-11e8-a539-1b0e0bda2aef",
            title: queryTitle,
            size: 20,
            hasimage: 1,
            page: page,
            fields: "objectnumber,title,dated,people,primaryimageurl,yearmade,technique",
        }

    }).on("complete", function( data ) {
        console.log( ".on:" );
        console.dir( data );
        that.setState( { records: data.records } );
        var peopleArray = data.records.map(people => people.people);
        console.log(peopleArray);
        //console.log(peopleArray[0].gender);
        console.log("Records here: /n");
        //Counts the gender
        data.records.forEach(function(record) {
           if (record.people !== undefined) {
             record.people.forEach(function(people) {
               if (people.gender !== undefined) {
                 if (people.gender == 'male') that.setState({male: that.state.male + 1});
                 if (people.gender == 'female') that.setState({female: that.state.female + 1});
                 if (people.gender == 'unknown') that.setState({undefinedGender: that.state.undefinedGender + 1});
               };
             });
           };
         });
         console.log("Males: " + that.state.male);
         console.log("Females: " + that.state.female);
         console.log("Unknown: " + that.state.undefinedGender);
         that.captureGenderCount();

    } );
  }


  //render
  render(){
      // SAM: render is called each time state changes
      console.log( "Render:");
      console.dir( this.state.records );    // SAM: for debugging

      return ( this.state.records.map(item =>
        <div>
          <div key={item.id} className="art-gallery">
            <li className="content">
              <img alt="artwork" src={item.primaryimageurl+ '?height=500&width=500'}/>
              <h6 className="gender">Artist: {getGender(item)}</h6>
              <p className="art-title"><strong>{item.title}</strong></p>
              {/* <p className="gender-count">{getGenderType(item)}</p> */}

            </li>
          </div>
        </div>
      )
    );



    function getGender( item ) {
      if (item.people!==undefined) {
        return item.people.map(p=>p.gender);
      }
      else {
        return ("no gender");
      }
    }

  }

  componentDidMount(){
    // Called after the component has been rendered into the page
  }


  componentDidUpdate(nextProps){
    // Called when the props provided to the component are changed
    if ( this.props.term == nextProps.term ) return; // no need to search again for same query
    var queryTitle = this.props.term;
    //if ( this.props.pageNumber == nextPage.pageNumber ) return;
    //var page = this.props.pageNumber;
    console.log( "[Art.js componentWillRecieveProps] query is now: " + queryTitle );
    this.doQuery( this, queryTitle );
    //this.doQuery( this, page );
  }

  componentWillUpdate(nextProps, nextState) {
    //componentWillUpdate(nextProps, nextState, nextPage) {
    // Called when the props and/or state change
  }

  componentWillUnmount(){
    // Called when the component is removed
  }

  // updateSearch(){
  //   this.search(this.refs.query.value);
  // }

}
