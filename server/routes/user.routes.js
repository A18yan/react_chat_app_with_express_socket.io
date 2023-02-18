const router = require('express').Router();
const { register, login, get_all_users } = require('../controller/user.controller');


router.post('/register', register);
router.post('/login', login);

router.get('/all-users', get_all_users)
module.exports = router;