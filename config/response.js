"use strict";

exports.success = function (req, res) {
  const data = {
    status: 200,
    value: values,
  };

  res.json(data);
  res.end();
};
