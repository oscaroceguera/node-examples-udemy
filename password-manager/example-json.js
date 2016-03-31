var person = {
  name: 'oscar',
  age: 30
}
var personJSON = JSON.stringify(person)

console.log(personJSON);
console.log(typeof personJSON);

var personObj = JSON.parse(personJSON)

console.log(personObj.name);
console.log(typeof personObj);

console.log('Change area');

var animal = '{"name":"PErro"}';

var animalObj = JSON.parse(animal)

animalObj.age = 1;

animal = JSON.stringify(animalObj);

console.log(animal);
