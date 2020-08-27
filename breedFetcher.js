const request = require('request');
const url = 'https://api.thecatapi.com/v1/images/search?breed_ids=';

const fetchBreedDescription = function(catId, callback) {
  if (catId.length > 4) catId = catId.slice(0, 4);
  let catUrl = url + catId;
  request(catUrl, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    // console.log(response.header);
    const cat = JSON.parse(body);
    if (cat.length > 0) {
      callback(null, cat[0].breeds[0].description.trim());
    } else {
      callback({errid: 'Cat not found :('}, null);
    }
  });
};

module.exports = {fetchBreedDescription};