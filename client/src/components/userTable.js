import React from "react";
export default function UserTable({ props }) {
  // map props to table
  let tableElements = props.map((val, key) => {
    return (
      <tr id={key}>
        <th>{val.id}</th>
        <th>{val.name}</th>
        <th>{val.quote}</th>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <h2>users table</h2>
      <h5>SELECT * from users</h5>
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
