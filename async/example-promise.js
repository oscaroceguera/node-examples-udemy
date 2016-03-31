var request = require('request');

function getWeather (location) {
  return new Promise(function (resolve, reject) {
    var encodedLocation = encodeURIComponent(location)
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ encodedLocation +'&units=imperial&APPID=5ade22753b71b2a50adad99fb21837f8';

    if (!location) {
      return reject('No location provided')
    }

    request({
    	url: url,
    	json: true
    }, function (error, response, body) {
    	if (error) {
    		reject('Unable to fetch weather.');
    	} else {
    	 resolve('Its ' + body.main.temp + ' in ' + body.name)
      }
    });
  })
}

getWeather('escuinapa')
  .then(function(currentWeather){
    console.log(currentWeather);
  }, function(error){
    console.log(error);
  })
