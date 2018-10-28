import React from "react";

export class Visualisation extends React.Component {
  render() {

    var malePercent = (this.props.maleCountApp / 20) * 100;
    //console.log('Male percent: ' + malePercent + '%');
    var femalePercent = (this.props.femaleCountApp / 20) * 100;
    //console.log('Female percent: ' + femalePercent + '%');

    return(
      <div className="gender-count">
        <div className="vis-two">
          <h6>Collection Gender Count</h6>
          <ul>
            <li><span className="gender-label">Men: </span>{this.props.maleCountApp}</li>
            <li><span className="gender-label">Women: </span>{this.props.femaleCountApp}</li>
          </ul>
        </div>
        <div className="vis-three">
          <h6>Collection Gender Balance</h6>
          <div className="progress">
            <div data-tip="Male" className="progress-bar bar-male" role="progressbar" style={{ width: malePercent + '%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            <div data-tip="Female" className="progress-bar bar-female" role="progressbar" style={{ width: femalePercent + '%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

      </div>
    );
  }
}
