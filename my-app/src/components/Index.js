import React from "react";

export class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prototype: 'prototypeOne'
    };
    this.prototypeOne = this.prototypeOne.bind(this);
    this.prototypeTwo = this.prototypeTwo.bind(this);
    this.prototypeThree = this.prototypeThree.bind(this);
    this.prototypeFour = this.prototypeFour.bind(this);
    this.prototypeFive = this.prototypeFive.bind(this);

  }
  prototypeOne (event) {
    this.setState({prototype: 'prototypeOne'}, function() { this.setState({prototype: 'prototypeOne'}) } );
    event.preventDefault();
    this.props.changePrototype( this.state.prototype );
  }
  prototypeTwo (event) {
    // this.setState({prototype: 'prototypeTwo'}, function() { this.setState({prototype: 'prototypeTwo'}) } );
     event.preventDefault();
    // console.log('state is' + this.state.prototype);
    // this.props.changePrototype( this.state.prototype );
    console.log('in change state',this.state.prototype);
    this.state.prototype = 'prototypeTwo'
    this.setState({});
    console.log('in change state after state change',this.state.prototype);
  }
  prototypeThree (event) {
    this.setState({prototype: 'prototypeThree'}, () => { console.log('new state', this.state); });
    event.preventDefault();
    console.log('state is' + this.state.prototype);
    this.props.changePrototype( this.state.prototype );
  }
  prototypeFour (event) {
    this.setState({prototype: 'prototypeFour'}, () => { console.log('new state', this.state); });
    event.preventDefault();
    console.log('state is' + this.state.prototype);
    this.props.changePrototype( this.state.prototype );
  }
  prototypeFive (event) {
    this.setState({prototype: 'prototypeFive'}, () => { console.log('new state', this.state); });
    event.preventDefault();
    console.log('state is' + this.state.prototype);
    this.props.changePrototype( this.state.prototype );
  }

  render() {
    return(
      <div className="index-list">
        <ul>
          <li><a href="" className="link-one" onClick={this.prototypeOne}><span>Prototype </span>01</a></li>
          <li><a href="" className="link-two" onClick={this.prototypeTwo}><span>Prototype </span>02</a></li>
          <li><a href="" className="link-three" onClick={this.prototypeThree}><span>Prototype </span>03</a></li>
          <li><a href="" className="link-four" onClick={this.prototypeFour}><span>Prototype </span>04</a></li>
          <li><a href="" className="link-five" onClick={this.prototypeFive}><span>Prototype </span>05</a></li>
        </ul>
      </div>
    );
  }
}
