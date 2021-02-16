import React, { Component } from "react";
import TableRow from "../tableRow/TableRow";
import API from "../utils/API";
import Search from "../search/Search";
import "./Style.css";

class Table extends Component {
  state = {
    search: "",
    result: [],
  };

  componentDidMount() {
    API.getEmployee()
      .then((response) => {
        console.log(response.data.results);
        this.setState({ result: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  searchEmployee = (filter) => {
    const filteredData = this.state.result.filter((employee) => {
      var values = Object.values(employee).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });

    this.setState({ result: filteredData });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.searchEmployee(this.state.search);
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 search">
            <Search
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name  
                   
              </th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            {this.state.result.map((user) => (
              <TableRow            
                image={user.picture.thumbnail}          
                name={user.name.first}
                phone={user.phone}
                email={user.email}
                dob={user.dob.date}
                key={user.key}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;
