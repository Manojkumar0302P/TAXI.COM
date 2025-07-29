const Ride = require('../Models/Ride');

exports.bookRide = async (req, res) => {
  try {
    const newRide = new Ride(req.body);
    await newRide.save();
    res.status(201).json(newRide);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRides = async (req, res) => {
  try {
    const rides = await Ride.find();
    res.json(rides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
