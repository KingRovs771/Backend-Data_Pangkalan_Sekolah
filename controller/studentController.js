const response = require("../config/response");
const execdb = require("../server/index");
const mysql = require("mysql");

exports.testStundet = function (req, res) {
  res.json({
    message: "Berhasil Test Student",
    Data: "Student",
  });
};
