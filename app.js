if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();

// SESSIONS
const session = require('express-session');
const FileStoreCtor = require('session-file-store');
const FileStore = FileStoreCtor(session);
//app.set('trust proxy', 1);
const sessionSettings = {
    store: new FileStore(),
    secret: process.env.TOKEN_SECRET,
    resave: true,
    saveUninitialized: false,
    retries: 0,
    cookie: {
        secure: false,
    },
};
app.use(session(sessionSettings));

// DB CONNECTION
const db = require('./config/db');
db.connect();

// const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use('/', require('./routes/default'));
app.use('/user', require('./routes/userController'));
app.use('/test', require('./routes/test'));




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));