
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { loginValidator, passwordValidator } = require('../validator/validator');

const verify = require('../routes/authController');
const User = require('../models/UserModel');

// ROUTES

router.post('/new', async (req, res) => {

    const usernameExist = await User.findOne({ username: req.body.username });
    if (usernameExist) return res.status(400).send('Username already exists.');

    const { error } = passwordValidator({ password: req.body.password });
    if (!{ error } === void (0)) return res.status(400).send('Please check your password. ' + error);

    // HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        password: hashPassword,
        joined: new Date(),
    });

    try {
        const newUser = await user.save();
        res.json(newUser);
    } catch (err) {
        res.status(400).send(err.message);
    }

});

router.post('/login', async (req, res) => {

    const { error } = loginValidator(req.body);
    if (!{ error } === void (0)) return res.status(400).send('Error ' + error);

    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send('Username not found.');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Please check your password.');

    const token = jwt.sign({ _id: user._id, username: user.username }, process.env.TOKEN_SECRET);

    const sess = {
        username: user.username,
        role: user.role,
        last_log: user.date,
        jwt: token,
    };
    req.session.user = sess;
    console.log('login');
    console.log(req.session);
    console.log('--------------------------------------------');

    res.json(sess);

});

router.get('/logout', verify, async (req, res) => {

    req.session.destroy((err) => {
        if (err) return res.status(400);
    });
    res.status(200).send('Logout success.');

});

module.exports = router;