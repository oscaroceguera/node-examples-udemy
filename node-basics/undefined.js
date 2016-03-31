function greetUser (name) {
  if (typeof name === 'undefined') {
    console.log('HOla mundanos');
  } else {
    console.log('Hello', name, ' !');
  }
}

greetUser('Andrew')
greetUser();
