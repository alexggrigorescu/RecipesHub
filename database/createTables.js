const mysql = require("mysql");

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_recipeshub",
  multipleStatements: true,
});

const query = `
CREATE TABLE recipes (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    image VARCHAR(200) NOT NULL,
    author VARCHAR(45) NOT NULL,
    description VARCHAR(300) NOT NULL,
    short_description VARCHAR(100) NOT NULL,
    cuisine VARCHAR(30) NOT NULL,
    likes INT, 
    PRIMARY KEY (id));
CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    recipe_id INT NOT NULL, 
    author VARCHAR(45) NOT NULL,
    message VARCHAR(300) NOT NULL,
    posted_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
    PRIMARY KEY (id));
`;

mysqlPool.query(query, function (err, results) {
  if (err) throw console.log(err.message);

  console.log("Tables have been craeted.");
});
