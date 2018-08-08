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
          query: '',
          femaleCount: 0
      };
      console.log('the state of query is: ' + this.state.query);
  }

  updateSearch() {
    // this.setState({ query: this.state.handleSubmit });
    this.setState({ query: 'dance' });
    console.log('update search term is' + this.props.handleSubmit)
  }

  componentWillMount(props){

    var that = this;
    var rest = require("restler");
    var queryTitle = this.state.query;
    rest.get("https://api.harvardartmuseums.org/object", {
        query: {
            apikey: "16cd3780-7e88-11e8-a539-1b0e0bda2aef",
            title: queryTitle,
            size: 20,
            hasimage: 1,
            page: 1,
            fields: "objectnumber,title,dated,people,primaryimageurl,yearmade,technique",
        }

    }).on("complete", function( data ) {
        console.log( ".on:" );
        console.dir( data );
        console.log('this is caitlin: ' + data.records[0].people[0].gender);
        that.setState( { records: data.records } );
        // "that" is actually "this" at React scope
        // SAM: setState sets a variable in the React state element to some value.
        // SAM: Up in the constructor we created a state variable called "records" (see above)
        // SAM: we use setState to update it with the records returned from the REST query
        // SAM: according to React, we should only set state directly in the constructor
        // SAM: after that, if we want to change or update the state we use setState because this
        // SAM: will also cause render() to be called.
        // genderCount(data.records.map(item =>
        //   item.people.map(gender => gender.gender)
        //   console.log(gender.gender);
        // ));
        var peopleArray = data.records.map(people => people.people);
        console.log(peopleArray);
        console.log(peopleArray[0].gender);
        console.log("Records here: /n");
        // Counts the gender
        var male = 0;
        var female = 0;
        data.records.forEach(function(record) {
          record.people.forEach(function(people) {
            if (people.gender == 'male') male++;
            if (people.gender == 'female') female++;
          });
        });
        console.log("Males: " + male);
        console.log("Females: " + female);

          if (peopleArray.people!==undefined) {
            //peopleArray.map(gender => gender.gender);
            //console.log(genderArray);
            console.log('i am not undefined');
            var genderCount = peopleArray.people.map(hello => hello.gender);
          }
          else {
            console.log('i am undefined');
          }
          console.dir( genderCount );

    } );
  }

  // you can use => (see below) in .on() too:
  // .on("complete", data=>that.setState({ records: data.records }));
  //render
  render(){
      // SAM: render is called each time state changes
      console.log( "Render:");
      console.dir( this.state.records );    // SAM: for debugging

      // SAM: this is confusing so needs some explanation...
      // SAM: we did setState() in .on() above.  This copied the data returned from the
      // SAM: REST call into state.  We can access state from render with this.state
      // SAM: since we created a state variable called records to hold data.records, we
      // SAM: can now use it in render to output our data
      // SAM: so here's the confusing thing: =>
      // SAM: => is a shorthand way of writing a function
      // SAM: this.state.records is an array
      // SAM: .map() is a method that all arrays can use, see:
      //    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
      // SAM: so what .map() does is is takes a function and applies that function
      // to every item in an array and outputs a new array with the transformed values
      // so, for example myArray.map( function(x) {return x+1} ) would go through each element
      // in myArray and send them into the anonymous function as variable x, which then adds 1
      // to them and returns the result.  So if myArray was [1,2,3,4] then myArray.map(
      // function(x) {return x+1} ) would return [2,3,4,5]
      // OK, so now we know what map() does, we move on to =>
      // => is a quick way of writing a function
      // var a = function(x) { return x + 1 }
      // var a = x => x + 1;
      // most importantly, we can do this:
      // myArray.map( x=>x+1 )
      // what this does is it loads each element of myArray into the variable x and then
      // adds 1 to each and returns the modified array as a result
      // now, this.state.records is an ARRAY of records from the harvard site
      // eg: this.state.records.title is the title of an item in the collection
      // so if we do: this.state.records.map() then we're using map to call a function
      // using each element in the records[] array as input
      // so for example we could so this.state.records.map( item=>item.title ) would construct
      // an array of title fields from each record (ie: an array of titles)
      // if we wrap that in {} and use it in a return from render() as below
      // then we'd print each title to the browser:
      // return ( this.state.records.map( item=>{item.title} ) );
      // finally, we wrap this in some HTML.  React gives us a warning if we don't set a
      // unique key value for each element, so using <li key={item.id}> takes the id from
      // the actual record and uses that as a unique key

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

          <div className="gender-count">
            {/* <p>{getGenderType(item)}</p> */}
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


  componentWillReceiveProps(nextProps){
    // Called when the props provided to the component are changed
  }

  componentWillUpdate(nextProps, nextState){
    // Called when the props and/or state change
  }

  componentWillUnmount(){
    // Called when the component is removed
  }

  // updateSearch(){
  //   this.search(this.refs.query.value);
  // }

}
