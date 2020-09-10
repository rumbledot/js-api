const express = require('express');
const router = express.Router();

// ROUTES

router.get('/', (req, res) => {
    res.json('Hello from API..');
});

router.get('/start', (req, res) => {
    res.json('API is running..');
});

module.exports = router;