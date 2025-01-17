const response = require('../config/response');
const execdb = require('../server/index');
const mysql = require('mysql');

exports.testStudent = function (req, res) {
  res.json({
    message: 'Berhasil Test Student',
    Data: 'Student',
  });
};

exports.getAllStudent = function (req, res) {
  execdb.query('SELECT * FROM datadik_siswa', function (error, rows, fields) {
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

exports.insertStudent = function (req, res) {
  let dataStudent = {
    siswa_uid: req.body.siswa_uid,
    nisn: req.body.nisn,
    nis: req.body.nis,
    nama_siswa: req.body.nama_siswa,
    tempat_lahir: req.body.tempat_lahir,
    tanggal_lahir: req.body.tanggal_lahir,
    jenis_kelamin: req.body.jenis_kelamin,
    agama: req.body.agama,
    alamat: req.body.alamat,
    no_hp: req.body.no_hp,
    email: req.body.email,
    diterima_tgl: req.body.diterima_tgl,
    diterima_dikelas: req.body.id_kelas,
    asal_sekolah: req.body.asal_sekolah,
    status_keluarga: req.body.status_keluarga,
    anakke: req.body.anakke,
    nama_ayah: req.body.nama_ayah,
    pekerjaan_ayah: req.body.pekerjaan_ayah,
    nama_ibu: req.body.nama_ibu,
    pekerjaan_ibu: req.body.pekerjaan_ibu,
    alamat_ortu: req.body.alamat_ortu,
    nohp_ortu: req.body.nohp_ortu,
    nama_wali: req.body.nama_wali,
    pekerjaan_wali: req.body.pekerjaan_wali,
    alamat_wali: req.body.alamat_wali,
    nohp_wali: req.body.nohp_wali,
  };

  let queryInsertStudent = 'INSERT INTO ?? SET ?';
  let tableStudent = ['datadik_siswa'];

  queryInsertStudent = mysql.format(queryInsertStudent, tableStudent);
  execdb.query(queryInsertStudent, dataStudent, function (error, result) {
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
