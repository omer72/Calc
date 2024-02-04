'use strict';
const jwt = require('jsonwebtoken');

var utils = require('../utils/writer.js');
var Calculator = require('../service/CalculatorService');
// Secret key for JWT
const secretKey = process.env.SECRET_KEY || 'your_secret_key';
// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    let token = req.headers.authorization;
    token = token.substring(7);
    let respone = true;
    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        respone = !err;

    });
    return respone;
};

module.exports.calculateNumbers = function calculateNumbers (req, res, next, body) {
    if (!verifyToken(req, res, next)){
        return res.status(401).json({ message: 'Invalid token' });
    } else {
        Calculator.calculateNumbers(body)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (response) {
                utils.writeJson(res, response, 400);
            });
    }
};


