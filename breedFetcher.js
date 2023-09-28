const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
      
    if (error) {
      callback(error);
      process.exit();
    }

    const [data] = JSON.parse(body);
      
    if (data) { // we originally just receive text in HTML format - this converts it to JSON which we can read in terminal
      callback(null, data.description);
    }

    if (!data) {
      callback(error, 'Breed not found');
    }
  });
};

module.exports = fetchBreedDescription;