const { config } = require('../server/index');
const multer = require('multer');

module.exports = function (app) {
  const main = require('../controller/indexController');
  const kelas = require('../controller/classController');
  const mapel = require('../controller/mapelController');
  const student = require('../controller/studentController');
  const teacher = require('../controller/teacherController');

  //main
  app.route('/api/v1/main').get(main.indexPage);

  //kelas
  app.route('api/v1/kelas').get(kelas.getAllClass);
  app.route('api/v1/insertKelas').post(kelas.InsertClass);
  //mapel
  app.route('api/v1/mapel').get(mapel.getAllMapel);
  //student
  app.route('api/v1/student').get(student.getAllStudent);
  app.route('api/v1/insertStudent').post(student.insertStudent);
  //teacher
  app.route('api/v1/teacher').get(teacher.getAllTeacher);
  app.route('api/v1/insertTeacher').post(teacher.insertTeacher);
};
