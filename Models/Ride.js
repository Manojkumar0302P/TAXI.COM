const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  pickup: String,
  drop: String,
  phone: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ride', rideSchema);
