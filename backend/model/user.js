const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('Users', User);