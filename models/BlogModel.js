const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    owner: {
        type: String,
        required: true,
    },
    text: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Blogs', BlogSchema);