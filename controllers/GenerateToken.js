'use strict';

var utils = require('../utils/writer.js');
var GenerateToken = require('../service/GenerateTokenService');

module.exports.generateToken = function generateToken (req, res, next) {
  GenerateToken.generateToken()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
