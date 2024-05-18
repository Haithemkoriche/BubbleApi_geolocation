const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

// Define routes
router.get('/', cityController.getCity);

module.exports = router;
