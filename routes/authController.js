const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

module.exports = async function (req, res, next) {
    console.log('authenticator');
    console.log(req.headers);
    console.log(req.session);
    console.log('--------------------------------------------');
    // const cookie = req.headers.cookie;
    // const token = cookie.split('; ')[0].replace('website_session=', '');

    try {
        const token = req.session.user.jwt;
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;

        const checkUser = await User.findOne({ _id: req.user._id });
        if (!checkUser) return res.status(400).send('Unknown user.');

        next();
    } catch (err) {
        return res.status(400).send('Access Denied.');
    }

}