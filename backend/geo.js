const axios = require('axios');

// Replace with your Geoapify API key
const API_KEY = '2178a4f020a147a390ef721096dc63b2';

// Function to get coordinates from an address
async function getCoordinates(address) {
  try {
    const response = await axios.get('https://api.geoapify.com/v1/geocode/search', {
      params: {
        text: address, // The address to geocode
        apiKey: API_KEY, // Your Geoapify API key
      },
    });

    if (response.data.features && response.data.features.length > 0) {
      const coordinates = response.data.features[0].geometry.coordinates;
      const latitude = coordinates[1];
      const longitude = coordinates[0];

      console.log(`Address: ${address}`);
      console.log(`Latitude: ${latitude}`);
      console.log(`Longitude: ${longitude}`);
      return {latitude, longitude};
    } else {
      console.log('No coordinates found for the given address.');
    }
  } catch (error) {
    console.error('Error fetching geolocation data:', error);
  }
}

module.exports = {getCoordinates}
