var storage = require('node-persist')
storage.initSync();

// storage.setItemSync('accounts', [{
//   username: 'Oscar',
//   balance: 0
// }])

var accounts = storage.getItemSync('accounts')

// push on a new account
// accounts.push({
//   username: 'Oscar',
//   balance: 75
// })

// save using setItemSync
//storage.setItemSync('accounts', accounts)

console.log(accounts);
