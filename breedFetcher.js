const request = require('request');

const input = process.argv[2];

let callCatApi = (input) => {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
      
    if (error) {
      console.log('Request Failed: ', error);
      process.exit()
    }

    const [data] = JSON.parse(body);
      
    if (data) { // we originally just receive text in HTML format - this converts it to JSON which we can read in terminal
    console.log(data.description);
    }

    if (!data) {
    console.log('Error: No data found');
    }

    return ('Breed not found')
  })
};

callCatApi(input);
