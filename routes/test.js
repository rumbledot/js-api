const express = require('express');
const router = express.Router();
const verify = require('../routes/authController');

const Test = require('../models/TestModel');

// ROUTES

router.get('/', verify, async (req, res) => {
    console.log('test');
    if (!req.session.count) {
        req.session.test = 'test start';
        req.session.count = 1;
    } else {
        req.session.test = 'test viewed for:';
        req.session.count++;
    }
    console.log(req.session);
    console.log('--------------------------------------------');

    try {
        const tests = await Test.find();
        res.json(tests);
    } catch (err) {
        res.json({ message: err });
    }

});

router.post('/new', verify, async (req, res) => {

    const test = new Test({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const newTest = await test.save();
        res.json(newTest);
    } catch (err) {
        res.json({ message: err });
    }

});

router.get('/:testID', verify, async (req, res) => {

    try {
        const test = await Test.findById(req.params.testID);
        res.json(test);
    } catch (err) {
        res.json({ message: err });
    }

});

router.delete('/:testID', verify, async (req, res) => {
    try {
        const test = await Test.remove({ _id: req.params.testID });
        res.json(test);
    } catch (err) {
        res.json({ message: err });
    }

});

router.patch('/:testID', verify, async (req, res) => {

    try {
        const test = await Test.updateOne({
            _id: req.params.testID
        },
            {
                $set: {
                    title: req.body.title
                }
            });
        res.json(test);
    } catch (err) {
        res.json({ message: err });
    }

});

router.get('/verify', verify, (req, res) => {
    res.send(req.user);
});

module.exports = router;