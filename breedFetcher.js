const request = require('request');
const url = 'https://api.thecatapi.com/v1/images/search?breed_ids=';



const inputHandler = function(input = process.argv[2]) {
  let catId = input.slice(0, 4);
  let catUrl = url + catId;
  // console.log(catId);
  request(catUrl, (err, response, body) => {
    if (err) {
      console.log(err);
      return;
    }
    // console.log(response.header);
    const cat = JSON.parse(body);
    if (cat.length > 0) {
      console.log(cat[0].breeds[0].description);
    } else {
      console.log('Cat not found :(');
    }
  });
};
inputHandler();