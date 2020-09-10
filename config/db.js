const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect(
        process.env.DB_CONNECTION,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('MongoDB connected!'))
        .catch(err => console.log("Some error: " + err));
};

module.exports.connect = connect;