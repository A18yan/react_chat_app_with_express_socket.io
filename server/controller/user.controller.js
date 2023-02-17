const User = require('../model/user.model');

module.exports.register = (req, res) => {
    const { name, email, password } = req.body;
    User.findOne({ email })
        .then((user) => {
            if (user) return res.status(200)
                .json({ message: 'user already exists', status: 400 })
        })
    const user = new User({ name, email, password })
    user.plain_password = password;
    user.save()
        .then((user) => {
            if (!user) return res.status(200)
                .json({ message: 'error registering user', status: 500 })
            if (user) return res.status(200)
                .json({ message: 'user registered successfully', status: 201 })
        })
        .catch((err) => {
            res.status(400).json({ message: 'error registering user', status: 500 })
        })
}