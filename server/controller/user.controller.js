const User = require('../model/user.model');

// response -> a function to return a response
const response = (res, server_status, message, status) => {
    return res.status(server_status).json({ message, status });
}
// response_with_data -> a function to return a response with data
const response_with_data = (res, server_status, message, status, data) => {
    return res.status(server_status).json({ message, status, data });
}
// sign in -> sign in a user with name, email and password field
module.exports.register = (req, res) => {
    const { name, email, password } = req.body;
    if (!email) response(res, 200, 'email is required', 400);
    if (!password) response(res, 200, 'password is required', 400);
    if (!name) response(res, 200, 'name is required', 400);
    User.findOne({ email })
        .then((user) => {
            if (user) response(res, 200, 'user already exists with that email', 400)
        })
    const user = new User({ name, email, password })
    user.plain_password = password;
    user.save()
        .then((user) => {
            if (!user) response(res, 200, 'error creating user', 400)
            if (user) response(res, 200, 'user created successfully', 201)
        })
        .catch((err) => {
            response(res, 400, 'error creating user', 500)
        })
}

// login -> authenticate a user with provided password and email
module.exports.login = (req, res) => {
    const {email, password} = req.body;
    if (!email) response(res, 200, 'email is required', 400);
    if (!password) response(res, 200, 'password is required', 400);
    User.findOne({email})
        .then((user) => {
            if (!user) response(res, 200, 'user does not exist', 400);
            if (user) {
                if (!user.authenticate(password)) response(res, 200, 'wrong password', 400);
                if (user.authenticate(password)) {
                    const token = user.token();
                    user.token = token;
                    user.save()
                        .then((saved_user) => {
                            if (!saved_user) response(res, 200, 'error logging in', 400);
                            if (saved_user) response_with_data(res, 200, 'logged in successfully', 200, saved_user);
                        })
                        .catch((err) => {   
                            response(res, 400, 'error logging in', 500);
                        })
                }
            }
        })
        .catch((err) => {   
            response(res, 400, 'error logging in', 500);
        })

}