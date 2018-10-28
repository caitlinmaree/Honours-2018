import React from "react";

export class Home extends React.Component {
  render() {
    return(
      <div className="intro-text">
        <h1>
          Welcome, to Women in Art.
        </h1>
        <h2>A website to highlight <span>gender bias</span> in the Arts.</h2>
        <h2 className="explore">Explore...</h2>
      </div>
    );
  }
}
