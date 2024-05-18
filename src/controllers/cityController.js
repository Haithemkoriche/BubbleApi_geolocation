const cityService = require('../services/cityService');

const getCityName = async (req, res) => {
  try {
    const cityName = await cityService.getCityName(req.body);
    res.send(`Received city name: ${cityName}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCityName,
};
