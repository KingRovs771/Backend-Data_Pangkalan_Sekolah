const execdb = require('../server/index');
const mysql = require('mysql');

exports.getAllTeacher = function (req, res) {
  execdb.query('SELECT * FROM datadik_guru', function (error, rows, fields) {
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

exports.insertTeacher = function (req, res) {
  let dataTeacher = {
    guru_uid: req.body.guru_uid,
    nip: req.body.nip,
    nuptk: req.body.nuptk,
    nama_guru: req.body.nama_guru,
    tempat_lahir: req.body.tempat_lahir,
    tanggal_lahir: req.body.tanggal_lahir,
    jenis_kelamin: req.body.jenis_kelamin,
    agama: req.body.agama,
    alamat: req.body.alamat,
    no_hp: req.body.no_hp,
    email: req.body.email,
    gelar_depan: req.body.gelar_depan,
    gelar_belakang: req.body.gelar_belakang,
    kode_mapel: req.body.mapel_id,
  };

  let queryInsertTeacher = 'INSERT INTO ?? SET ? ';
  let tableTeacher = ['datadik_guru'];

  queryInsertTeacher = mysql.format(queryInsertTeacher, tableTeacher);

  execdb.query(queryInsertTeacher, dataTeacher, function (error, result) {
    if (error) {
      console.log(error);
      res.json({
        Code: '401',
        Status: 'Error',
        Message: 'Data Tidak Berhasil di Simpan Silakan Coba Lagi',
      });
    } else {
      res.json({
        Code: '200',
        Status: 'Success',
        Message: 'Data Berhasil Di Simpan',
        Data: result,
      });
    }
  });
};
