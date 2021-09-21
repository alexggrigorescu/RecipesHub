const mysql = require("mysql");

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_recipeshub",
  multipleStatements: true,
});

const query = `
DROP TABLE recipes;
DROP TABLE comments;
`;

mysqlPool.query(query, function (err, results) {
  if (err) throw console.log(err.message);

  // `results` is an array with one element for every statement in the query:
  console.log("Tables have been dropped."); // [create1]
});
