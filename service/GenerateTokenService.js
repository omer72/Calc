'use strict';
const jwt = require("jsonwebtoken");

/**
 * Generate Token for 1 Hr
 * The token that is being generate can be used for 1hr 
 *
 * no response value expected for this operation
 **/
exports.generateToken = function() {
  return new Promise(function(resolve, reject) {
    try {
      const payload = {};
      const expiresIn = '1h'; // Token expiration time
      const secretKey = process.env.SECRET_KEY;
      const token = jwt.sign(payload, secretKey, {expiresIn});
      resolve({token});
    }catch (err) {
      console.error(err)
    }
  });
}

