const mongoose = require('mongoose');

const DusunSchema = mongoose.Schema({
    owner: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    level: {
        type: Number,
        min: 0,
        max: 4,
    },
    location: {
        type: Array,
    },
    food: {
        type: Number,
        min: 0,
    },
    population: {
        type: Number,
        min: 0,
    },
    income: {
        type: Number,
        min: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Dusuns', DusunSchema);