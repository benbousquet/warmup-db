import React from "react";
export default function AllInfo({ props }) {
  // map props to table
  let tableElements = props.map((val, key) => {
    return (
      <tr id={key}>
        <th>{val.id}</th>
        <th>{val.name}</th>
        <th>{val.quote}</th>
        <th>{val.body}</th>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <h2>join query</h2>
      <h5>
        SELECT users.ID, name, quote, body FROM users INNER JOIN bios ON
        users.ID = bios.user_ID;
      </h5>
      <br />
      <tr>
        <th>id</th>
        <th>name</th>
        <th>quote</th>
        <th>body</th>
      </tr>
      {tableElements}
    </React.Fragment>
  );
}
