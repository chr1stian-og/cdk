const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    email: {type: String, required: false},
    password: {type: String, required:false},
});

module.exports = mongoose.model("user", userschema);