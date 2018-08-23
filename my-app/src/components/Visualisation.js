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
        <div class="progress">
          <div data-tip="Male" class="progress-bar bar-male" role="progressbar" style={{ width: malePercent + '%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
          <div data-tip="Female" class="progress-bar bar-female" role="progressbar" style={{ width: femalePercent + '%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    );
  }
}
