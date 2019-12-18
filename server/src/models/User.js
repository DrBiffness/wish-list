'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    fname: String,
    lname: String,
    email: String,
    dob: Date,
    locale: String
});

module.exports = mongoose.model('User', UserSchema);