import React, { Component } from "react";
import TableRow from "../tableRow/TableRow";
import API from "../utils/API";

class Table extends Component {

  state = {
    result: []
    
  };

  componentDidMount() {
    API.getEmployee()
    .then(response => {
      console.log(response.data.results);
      this.setState({ result: response.data.results });
    })
    .catch(error => {
      console.log(error);
    });
  };
  

  render() {
    return (
      <div className="container">
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
              <TableRow image={user.picture.thumbnail} name={user.name.first} phone={user.phone} email={user.email} dob={user.dob.date}/>
          ))}
          
        
          </tbody>
        </table>
      </div>
    );
  }

};
export default Table;
