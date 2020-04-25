const express = require('express');
const router = express.Router();
const data = require('./scraper');

router.get('/getstate/:name', (req, res) => {
    const reqState = req.params.name;
    const result = data.states.find(result => result.trimmedState === reqState);
    res.json(result);
});

router.get('/getall', (req, res) => {
    console.log(data.states);
    console.log(data.country);
    res.json(data.country);
})

module.exports = router;
