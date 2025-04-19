const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.schema({
  name: {
    type: String,
    required: [true, 'Please provide your name']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide valid email']
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 8
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    minlength: 8
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
