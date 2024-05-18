const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

// Route to receive city name
router.post('/', cityController.getCityName);

module.exports = router;
