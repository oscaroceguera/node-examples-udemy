var weather = require('./weather.js')
var location = require('./locations.js')

var argv = require('yargs')
  .option('location', {
    alias: 'l',
    demand: false,
    describe: 'Location to fetch weather for',
    type: 'string'
  })
  .help('help')
  .argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
  weather(argv.l, function (currentWeather) {
    console.log(currentWeather);
  })
} else {
  console.log('no loaction given');
  location(function(location){
    if (location) {
      weather(location.city, function(currentWeather){
        console.log(currentWeather);
      })
    } else {
      console.log('Unable to guest location');
    }
  })
}
