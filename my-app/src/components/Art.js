import React from "react";
export class Art extends React.Component {

  constructor(props){
      super( props );

      this.state = {
          records: [],
          undefinedGender: 0,
          male: 0,
          female: 0,
          complete: 'unloaded'
      };
      this.captureGenderCount = this.captureGenderCount.bind(this);
  }

  captureGenderCount() {
    this.props.passGenderCountMale( this.state.male );
    this.props.passGenderCountFemale( this.state.female );
  }

  componentWillMount(){
  }

  doQuery(that, queryTitle, page, size) {
      var rest = require("restler");
      rest.get("https://api.harvardartmuseums.org/object", {
        query: {
            apikey: "16cd3780-7e88-11e8-a539-1b0e0bda2aef",
            title: queryTitle,
            size: size,
            hasimage: 1,
            page: page,
            fields: "objectnumber,title,dated,people,primaryimageurl,yearmade,technique",
        }

    }).on("complete", function( data ) {
        that.setState( { records: data.records } );
        that.setState( { complete: 'loaded'});
        data.records.forEach(function(record) {
           if (record.people !== undefined) {
             record.people.forEach(function(people) {
               if (people.gender !== undefined) {
                 if (people.gender === 'male') that.setState({male: that.state.male + 1});
                 if (people.gender === 'female') that.setState({female: that.state.female + 1});
                 if (people.gender === 'unknown') that.setState({undefinedGender: that.state.undefinedGender + 1});
               };
             });
           };
         });
         that.captureGenderCount();

    } );
  }


  //render
  render(){
      return ( this.state.records.map(item =>
        <div key={item.id}>
          <div className="art-gallery" id={getGender(item)}>
            <li className="content">
              <img alt="artwork" src={item.primaryimageurl+ '?height=500&width=500'}/>
              <h6 className="gender">Artist: {getGender(item)}</h6>
              <p className="art-title"><strong>{item.title}</strong></p>
            </li>
          </div>

        </div>
      )
    );
    function getGender( item ) {
      if (item.people!==undefined) {
        if (item.people.length >= 2) {
          //console.log('array longer than 1');
          return ("multi-gender");
        }
        return item.people.map(p=>p.gender);
      }
      else {
        return ("unknown");
      }
    }
  }

  componentDidMount(){
    var queryTitle = this.props.term;
    var page = this.props.pageNumber;
    var size = this.props.size;
    this.doQuery( this, queryTitle, page, size );
  }


  componentDidUpdate(nextProps){
    if ( this.props.term === nextProps.term && this.props.pageNumber === nextProps.pageNumber && this.props.size === nextProps.size ) return; // no need to search again for same query
    var queryTitle = this.props.term;
    var page = this.props.pageNumber;
    var size = this.props.size;
    this.doQuery( this, queryTitle, page, size );
  }



  componentWillUpdate(nextProps, nextState) {

  }

  componentWillUnmount(){

  }

}
