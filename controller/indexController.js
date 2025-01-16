const response = require("../config/response");
const execdb = require("../server/index");
const mysql = require("mysql");

exports.indexPage = function (req, res) {
  res.json({
    Message: "Berhasil Terhubung",
    Data: "Hello World",
  });
};
