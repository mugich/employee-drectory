import React from "react";
import Moment from "react-moment";

const TableRow = (props) => {
  return (
    <tr>
      <td>
        <img src={props.image} />
      </td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>

      <td>
        <Moment format="YYYY/MM/DD">{props.dob}</Moment>
      </td>
    </tr>
  );
};

export default TableRow;
