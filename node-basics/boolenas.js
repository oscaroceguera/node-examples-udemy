var isValid = false;

function toogleBoolean(booleanVar){
  if (typeof booleanVar === 'boolean'){
    return !booleanVar;
  }else{
    console.log('Not a booleand');
  }
}


var newBoolean = toogleBoolean(isValid);
console.log(newBoolean);
