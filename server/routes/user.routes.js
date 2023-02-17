const router = require('express').Router();
const userController = require('../controller/user.controller');
const { register } = userController;


router.post('/register', register);

module.exports = router;