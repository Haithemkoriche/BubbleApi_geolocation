const cityService = require('../services/cityService');

exports.getCity = async (req, res) => {
  try {
    const city = await cityService.getCity();
    res.json(city);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
