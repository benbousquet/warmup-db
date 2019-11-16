const { Pool } = require("pg");
var fs = require("fs");
// set up pool connection
const pool = new Pool({
  connectionString:
    "postgresql://doadmin:k5b489m313l1bzg2@db-postgresql-sfo2-80365-do-user-6006068-0.db.ondigitalocean.com:25060/defaultdb?sslmode=require",
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync("./cert.crt").toString()
  }
});
// connect to db
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    }
    console.log(result.rows);
  });
});

module.exports = {
  pool
};
