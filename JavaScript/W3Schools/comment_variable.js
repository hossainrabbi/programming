var a = 'Hello World';
let fName = 'Hossain';
let lName = 'Rabbi';
const age = 21;

console.log(a);
console.log('My Name is ' + fName + lName);
console.log(age);

let x = 10;
// let x = 11; // cannot let redeclare but we can reassign
x = 3;
console.log(x);

const y = 10;
/*
const y = 5; // cannot const redeclare and reassign
y = 3;
*/
console.log(y);

{
  let m = x;
  const n = y;

  console.log(`m = ${m} & n = ${n}`);
}

// console.log(`m = ${m} & n = ${n} out of block scope.`); // cannot use m & n, because let and const is block scope
