const { placemarkFromCoordinates } = require('geocoding');

const getCityName = async ({ latitude, longitude }) => {
  try {
    // Reverse geocoding to get the city name
    const placemarks = await placemarkFromCoordinates(latitude, longitude);
    return placemarks[0].locality || 'Unknown';
  } catch (error) {
    throw new Error('Error getting city name');
  }
};

module.exports = {
  getCityName,
};
