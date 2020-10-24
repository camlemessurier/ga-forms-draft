const mysql = require("mysql");

const pool = mysql.createPool({
	host: "127.0.0.1",
	user: "root",
	password: "password",
	database: "GA",
	port: "3306",
});

module.exports = pool;
