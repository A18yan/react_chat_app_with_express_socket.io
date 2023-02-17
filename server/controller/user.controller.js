const User = require('../model/user.model');

module.exports.register = (req, res) => {
    res.json({data:req.body})
}