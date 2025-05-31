import axios from 'axios';

const geocodeAddress = async (address) => {
  if (!address || typeof address !== 'string') {
    throw new Error('Geocoding error: missing or bad query');
  }

  const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
    params: { q: address, key: '57a1183746d94a18a8a6c3b66293b66b' },
  });

  const results = response.data.results;

  if (!results || results.length === 0 || !results[0].geometry) {
    throw new Error('Geocoding error: no results found');
  }

  const { lat, lng } = results[0].geometry;
  return { 'lat' : lat, "lng" : lng };
};

export { geocodeAddress };