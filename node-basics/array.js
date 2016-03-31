var grades = [100, 50, 75];
var totalGrade = 0;

// grades.push(79)
// var ultimo = grades.pop();
// var primero = grades.shift();
//
// console.log(grades);
// console.log(ultimo);
// console.log(primero);

// grades.forEach( function (grade) {
//   console.log(grade);
// });


// forEach -> add grade to totalgrade
grades.forEach(function(grade){
  totalGrade += grade;
  console.log('Current total is ', totalGrade);
})

var average = totalGrade / grades.length;
console.log('Average is '+ average);
