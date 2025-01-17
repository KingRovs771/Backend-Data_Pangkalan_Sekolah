const response = require('../config/response');
const execdb = require('../server/index');
const mysql = require('mysql');

exports.getAllClass = function (req, res) {
  execdb.query('SELECT * FROM datadik_kelas', function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      res.json({
        Code: '200',
        Message: 'Data Berhasil Didapatkan',
        Data: rows,
      });
    }
  });
};

exports.InsertClass = function (req, res) {
  let dataClass = {
    kelas_id: req.body.kelas_id,
    nama_kelas: req.body.nama_kelas,
    tingkat: req.body.tingkat,
    jumlah_siswa: req.body.jumlah_siswa,
    wali_kelas: req.body.id_guru,
  };

  let queryInsertClass = 'INSERT INTO ?? SET ?';
  let tableClass = ['datadik_kelas'];
  querExecClass = mysql.format(queryInsertClass, tableClass);

  execdb.query(queryInsertClass, dataClass, function (error, result) {
    if (error) {
      console.log(error);
      res.json({
        Code: '401',
        Status: 'Error',
        Message: 'Data Tidak Berhasil di Simpan ke Database, Silakan Coba Lagi',
      });
    } else {
      res.json({
        Code: '200',
        Status: 'Success',
        Data: result,
      });
    }
  });
};
