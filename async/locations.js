var request = require('request');
var url = 'http://ipinfo.io'

module.exports = function (cb) {
  request({
    url: url,
    json: true
  }, function (error, response, body){
    if (error) {
      cb()
    } else {
      cb(body)
    }
  })
}
