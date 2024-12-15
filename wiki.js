const axios = require('axios');

// Wikipedia API endpoint
const API_URL = 'https://en.wikipedia.org/w/api.php';

// Parameters for the request
const params = {
  action: 'query',
  format: 'json',
  titles: 'Python (programming language)',
  prop: 'extracts',
  exintro: true,
  explaintext: true,
};

axios
  .get(API_URL, { params })
  .then((response) => {
    const page = Object.values(response.data.query.pages)[0];
    console.log('Extract:', page.extract);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });