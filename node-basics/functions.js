function greetUser (name, lastName) {
  return 'Hello ' + name + ' ' + lastName + '!';
}

var greeting = greetUser('Oscar', 'Ocegeura')
console.log(greeting);

console.log('////////////////////////////');

function add (a, b){
  var result = a + b;
  return result;
}

var result = add(5,10);
console.log('Add: ',result);
