
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: '',
    },
    salt:String,
}, { timestamps: true });

userSchema.virtual('plain_password')
.set(function(password) {
    this._plainPassword = password;
    if (password) {
      this.salt = crypto.randomBytes(32).toString('base64');
      this.password = this.hashPassword(password);
    }
  })
.get(function() {
    return this._plainPassword;
  });

userSchema.methods = {
    hashPassword(password) {
        if (!password) return '';
        try {
            return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
        } catch (err) {
            return '';
        }
    },
    authenticate(plainPassword) {
        return this.hashPassword(plainPassword) === this.password;
    },
    token(){
        return jwt.sign({ _id: this._id }, this.salt, { expiresIn: '30d' });
    }
};

module.exports = mongoose.model('User', userSchema);
