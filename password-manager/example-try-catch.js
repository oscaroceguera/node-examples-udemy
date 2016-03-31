function doWork () {
  throw new Error('Unable to decrypt accounts')
}

try {
  doWork()
} catch (e) {
  console.log('something went wront');
} finally {
  console.log('finally block executed');
}


console.log('try catch ended');
