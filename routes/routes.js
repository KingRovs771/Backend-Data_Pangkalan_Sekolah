const { config } = require("../server/index");
const multer = require("multer");

module.exports = function (app) {
  const main = require("../controller/indexController");

  app.route("/api/v1/main").get(main.indexPage);
};
