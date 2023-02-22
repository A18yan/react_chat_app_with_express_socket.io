const jwt = require('jsonwebtoken');
require('dotenv').config()
const User = require('../../model/user.model');

module.exports.authenticate=(req, res, next)=>{
    // get the headers
    const authHeader = req.headers.authorization;
    // get token now
    // const token = authHeader && authHeader.split(' ')[1];
    res.json({authHeader});
}