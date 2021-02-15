import React, { Component } from "react";
import "./Style.css"

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input type="search" placeholder="Search" />
      </div>
    );
  }
}

export default Search;
