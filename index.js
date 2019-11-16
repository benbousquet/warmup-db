// imports
var express = require("express");
var cors = require("cors");
var app = express();

// enable cors
app.use(cors());
// import connections
const { pool } = require("./connection");
// use body parser
app.use(express.json());

// get route for users data
app.get("/api/users", (req, res) => {
  // get all the users data
  pool.query("SELECT * from users", (err, results) => {
    // send results
    if (err) res.send(err);
    else res.send(results.rows);
  });
});

// get route for bios data
app.get("/api/bios", (req, res) => {
  // get all bios data
  pool.query("SELECT * from bios", (err, results) => {
    // send results
    if (err) res.send(err);
    else res.send(results.rows);
  });
});

// get route for join of biod and user data
app.get("/api/all-info", (req, res) => {
  // get inner join of users and bios by user ID
  pool.query(
    "SELECT users.ID, name, quote, body FROM users INNER JOIN bios ON users.ID = bios.user_ID;",
    (err, results) => {
      // send results
      if (err) res.send(err);
      else res.send(results.rows);
    }
  );
});

let port = 4000;

app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
