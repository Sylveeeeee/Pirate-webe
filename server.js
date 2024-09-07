const mysql = require("mysql2");
const  dbConection mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"piratedatabase"
}).promise()

module.exports = dbConection;