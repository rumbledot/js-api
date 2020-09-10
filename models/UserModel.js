const mongoose = require('mongoose');
const validate = require('mongoose-validator');

// VALIDATORS
var nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [6, 20],
        message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
    }),
    validate({
        validator: 'isAlphanumeric',
        passIfEmpty: true,
        message: 'Name should contain alpha-numeric characters only'
    })
];

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        validate: nameValidator,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
    },
    joined: {
        type: Date,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Users', UserSchema);