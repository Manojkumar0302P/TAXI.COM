const express = require('express');

const { bookRide, getRides } = require('../controllers/rideControllers');

const router = express.Router();

router.post('/book', bookRide);
router.get('/rides', getRides);

module.exports = router;
