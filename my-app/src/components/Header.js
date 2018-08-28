import React from "react";
import logo from '../images/logo-women-in-art-small.png';

export class Header extends React.Component {
  render() {
    return(
      <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <div className="navbar-brand"><h4>Gender in the Arts</h4></div>
        {/* <div className="navbar-brand"><img src={logo}/></div> */}
        <div className="container">
          <div className="navbar-header">

            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
