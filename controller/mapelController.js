const execdb = require('../server/index');
const mysql = require('mysql');

exports.getAllMapel = function (req, res) {
  execdb.query('SELECT * FROM datadik_mapel', function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      res.json({
        Code: '200',
        Status: 'Success',
        Data: rows,
      });
    }
  });
};
