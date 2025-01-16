const mysql = require("mysql");
require("dotenv/config");

const connDB = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connDB.connect((err) => {
  if (err) {
    console.error("Koneksi ke Database Gagal" + err.stack);
    return;
  }

  console.log("Terhubung ke Database dengan ID" + connDB.threadId);
});

module.exports = connDB;
