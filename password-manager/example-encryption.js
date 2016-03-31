var crypto = require('crypto-js')

var secretMessage = 'Hola scomosm oasos';
var secretKey = '123ak';

var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);

console.log('encriptando mesange: ', encryptedMessage);
