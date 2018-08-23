import React from "react";

export class Visualisation extends React.Component {
  render() {

    var malePercent = (this.props.maleCountApp / 20) * 100;
    console.log('Male percent: ' + malePercent + '%');
    var femalePercent = (this.props.femaleCountApp / 20) * 100;
    console.log('Female percent: ' + femalePercent + '%');

    return(
      <div className="Gender-count">
        <h6>Collection Gender Balance</h6>
        {/* <ul>
          <li><span className="gender-label">Men: </span>{this.props.maleCountApp}</li>
          <li><span className="gender-label">Women: </span>{this.props.femaleCountApp}</li>
        </ul> */}
        <div class="progress">
          <div class="progress-bar bar-male" role="progressbar" style={{ width: malePercent + '%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
          <div class="progress-bar bar-female" role="progressbar" style={{ width: femalePercent + '%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    );
  }
}
