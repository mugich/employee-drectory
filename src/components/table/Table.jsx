import React, { Component } from "react";
import TableRow from "../tableRow/TableRow";
import API from "../utils/API";
import Search from "../search/Search";

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
    console.log("Search", filter);
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
    console.log("Handle ", this.state.search);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.searchEmployee(this.state.search);
  };

  render() {
    return (
      <div className="container">
        <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
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
