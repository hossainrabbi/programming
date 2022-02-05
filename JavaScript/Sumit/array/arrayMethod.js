const numbers = [17, 1, 9, 16, 25, 45];

// foreEach => traverse an array
console.log('.....forEach.....');
numbers.forEach(function (value) {
  console.log(value);
});

// map => return an array
console.log('.....map.....');
const mapNumber = numbers.map(function (value) {
  return value * 2;
});
console.log(mapNumber);

// filter => filter value with array
console.log('.....filter.....');
const filterNumber = numbers.filter(function (value) {
  return value > 10;
});
console.log(filterNumber);

// reduce => pre value + next value = total
console.log('.....reduce.....');
const reduceNumber = numbers.reduce(function (total, value) {
  return total + value;
});
console.log(reduceNumber);

// every => every value is true then true
console.log('.....every.....');
const everyNumber = numbers.every(function (value) {
  return value > 1;
});
console.log(everyNumber);

// some => some value is true then true
console.log('.....some.....');
const someNumber = numbers.some(function (value) {
  return value > 180;
});
console.log(someNumber);

// indexOf => give an index number
console.log('.....indexOf.....');
const indexOfNumber = numbers.indexOf(9) + 1;
console.log(indexOfNumber);

// find => give an index number
console.log('.....find.....');
const findNumber = numbers.find(function (value) {
  return value > 16;
});
console.log(findNumber);
