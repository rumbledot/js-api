const mongoose = require('mongoose');

const { Schema } = mongoose;

const TestSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

TestSchema.methods.toJSON = function () {
    return {
        id: this._id,
        title: this.title,
        description: this.description,
        updated: this.date,
    };
};

module.exports = mongoose.model('Tests', TestSchema);