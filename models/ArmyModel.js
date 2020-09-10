const mongoose = require('mongoose');

const ArmySchema = mongoose.Schema({
    owner: {
        type: String,
        required: true,
    },
    type: {
        type: Number,
        min: 0,
    },
    level: {
        type: Number,
        min: 0,
        max: 4,
    },
    location: {
        type: Array,
    },
    quantity: {
        type: Number,
        min: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Armies', ArmySchema);