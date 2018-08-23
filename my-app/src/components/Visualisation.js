import React from "react";

export class Visualisation extends React.Component {
  render() {
    return(
      <div className="gender-count">
        <h6>Collection Gender Count</h6>
        <ul>
          <li><span className="gender-label">Men: </span>{this.props.maleCountApp}</li>
          <li><span className="gender-label">Women: </span>{this.props.femaleCountApp}</li>
        </ul>
      </div>
    );
  }
}
