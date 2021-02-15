import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
  
        </table>
      </div>
    );
  }
}

export default Table;
