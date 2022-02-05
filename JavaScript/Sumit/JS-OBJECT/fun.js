// const objMap = new Map();

// objMap.set('a', 100);
// objMap.set('c', 300);
// objMap.set('b', 300);

// objMap.set('c', 200);
// console.log(objMap);
// console.log(objMap.size);

const apples = { name: 'Apples' };
const bananas = { name: 'Bananas' };

// create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(true, 300);

console.log(fruits.get(apples));

// function value
function myFun(a) {
  return a * a;
}

const result = myFun;
console.log(result(10));
