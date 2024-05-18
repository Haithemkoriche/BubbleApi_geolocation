const { getCityName } = require('geocoding');

const getCityNameFromCoordinates = async ({ latitude, longitude }) => {
  try {
    const placemarks = await getCityName(latitude, longitude);
    return placemarks[0].locality || 'Unknown';
  } catch (error) {
    throw new Error('Error getting city name');
  }
};

module.exports = {
  getCityNameFromCoordinates,
};
