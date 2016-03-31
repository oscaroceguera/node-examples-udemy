var request = require('request');

module.exports = function (location, callback){
  var encodedLocation = encodeURIComponent(location)
  var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ encodedLocation +'&units=imperial&APPID=5ade22753b71b2a50adad99fb21837f8';

  if (!location) {
    return callback('No location provided')
  }

  request({
  	url: url,
  	json: true
  }, function (error, response, body) {
  	if (error) {
  		callback('Unable to fetch weather.');
  	} else {
  	 callback('Its ' + body.main.temp + ' in ' + body.name)
    }
  });

}
