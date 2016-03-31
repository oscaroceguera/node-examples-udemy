var account = {
    balance: 0
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
function getBalance (anount){
  return account.balance;
}

deposit(account, 1000)
console.log(getBalance(account));

withdraw(account, 121)
console.log(getBalance(account));
