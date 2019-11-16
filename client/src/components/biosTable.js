import React from "react";
export default function BiosTable({ props }) {
  // map props to table
  let tableElements = props.map((val, key) => {
    return (
      <tr id={key}>
        <th>{val.id}</th>
        <th>{val.user_id}</th>
        <th>{val.body}</th>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <h2>bios table</h2>
      <h5>SELECT * from bios</h5>
      <br />
      <tr>
        <th>id</th>
        <th>user_id</th>
        <th>body</th>
      </tr>
      {tableElements}
    </React.Fragment>
  );
}
