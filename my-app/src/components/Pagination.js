import React from "react";

export class Pagination extends React.Component {
  render() {
    return(
      <div className="pagination-list">
        <ul>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
        </ul>
      </div>
    );
  }
}
