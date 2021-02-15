import React from "react";

const TableRow = (props) => {
  return (
    <tr>
      <td><img src={props.image}/></td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </tr>
  );
};

export default TableRow;
