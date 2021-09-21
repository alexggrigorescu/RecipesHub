const mysql = require("mysql");

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_recipeshub",
  multipleStatements: true,
});

const query = `
INSERT INTO recipes (title, image,  author, description, short_description, cuisine, likes) VALUES ("Clatite cu nutella", "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80","Alexandru","Lista cu ingredienta si modul de preparare a clatitelor","Clatite simple si delicioase cu nutella", "American", 21);
INSERT INTO recipes (title, image,  author, description, short_description, cuisine, likes) VALUES ("Tort de ciocolata", "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80","Mirela","Lista cu toate cele necesare si modul de preparare","Tort de ciocolata si crema de fructe de padure", "French", 10)
`;

mysqlPool.query(query, function (err, results) {
  if (err) throw console.log(err.message);

  console.log("Data has been adde.");
});
