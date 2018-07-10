import React from "react";

export class Header extends React.Component {
  render() {
    return(
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <div className="navbar-header">

            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
