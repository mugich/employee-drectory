import React, { Component } from "react";
import "./Style.css";

class Navbar extends Component {
  render() {
    return (
      
        <nav className="navbar">
          
          <span className="text-center">
          <h2>Employee Directory</h2>
            Click on carrots to filter by heading or use the search box to narrow your result.</span>
        </nav>
      
    );
  }
}

export default Navbar;
