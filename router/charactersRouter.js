const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Test')
});

router.post('/', (req, res) => {
    const body = req.body;
});

module.exports = router;