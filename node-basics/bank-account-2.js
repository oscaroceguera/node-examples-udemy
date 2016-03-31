var accounts = []

// acount object
// balance
// username

// createAcount(acount)
// push onto accounts array
// return account
function createAcount (account) {
  accounts.push(account);
  return account;
}

// getAcount(username)
// find matchin account using forEach
function getAccount(username){
  var matchedAccount;

  accounts.forEach(function(account){
    if (account.username === username){
      matchedAccount = account
    }
  })

  return matchedAccount
}

// deposit(account, anount)
function deposit (account, anount){
  account.balance += anount;
}

// withdraw(account, anount)
function withdraw (account, anount){
  account.balance -= anount;
}

// getBalance(account)
function getBalance (account){
  return account.balance;
}

var oscarAccount = createAcount({
  username: 'Chon',
  balance: 0
});

deposit(oscarAccount, 100);
console.log(getBalance(oscarAccount));

withdraw(oscarAccount, 11);
console.log(getBalance(oscarAccount));

var existingAccount = getAccount('Chon')
console.log(getBalance(oscarAccount));
