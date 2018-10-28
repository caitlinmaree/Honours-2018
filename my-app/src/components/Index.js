import React from "react";

export class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prototype: ''
    };
    this.prototypeOne = this.prototypeOne.bind(this);
    this.prototypeTwo = this.prototypeTwo.bind(this);
    this.prototypeThree = this.prototypeThree.bind(this);
    this.prototypeFour = this.prototypeFour.bind(this);
    this.prototypeFive = this.prototypeFive.bind(this);

  }
  prototypeOne (event) {
    event.preventDefault();
    this.setState({ prototype: 'prototypeOne' },() => this.props.changePrototype( this.state.prototype ) );
    console.log('[index.js] prototype name:' + this.state.prototype);
  }

  prototypeTwo (event) {
    event.preventDefault();
    this.setState({ prototype: 'prototypeTwo' },() => this.props.changePrototype( this.state.prototype ) );
    console.log('[index.js] prototype name:' + this.state.prototype);
  }

  prototypeThree (event) {
    this.setState({ prototype: 'prototypeThree' },() => this.props.changePrototype( this.state.prototype ) );
    event.preventDefault();
    console.log('[index.js] prototype name:' + this.state.prototype);
  }

  prototypeFour (event) {
    this.setState({ prototype: 'prototypeFour' },() => this.props.changePrototype( this.state.prototype ) );
    event.preventDefault();
    console.log('[index.js] prototype name:' + this.state.prototype);
  }

  prototypeFive (event) {
    this.setState({ prototype: 'prototypeFive' },() => this.props.changePrototype( this.state.prototype ) );
    event.preventDefault();
    console.log('[index.js] prototype name:' + this.state.prototype);
  }

  render() {
    return(
      <div className="index-list">
        <ul>
          <li><a href="a" className="link-one" onClick={this.prototypeOne}><span>Prototype </span>01</a></li>
          <li><a href="b" className="link-two" onClick={this.prototypeTwo}><span>Prototype </span>02</a></li>
          <li><a href="c" className="link-three" onClick={this.prototypeThree}><span>Prototype </span>03</a></li>
          <li><a href="d" className="link-four" onClick={this.prototypeFour}><span>Prototype </span>04</a></li>
          <li><a href="e" className="link-five" onClick={this.prototypeFive}><span>Prototype </span>05</a></li>
        </ul>
      </div>
    );
  }
}
