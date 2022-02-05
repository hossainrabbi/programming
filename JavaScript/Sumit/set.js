const set = new Set([1, 2, 3, 4]);

set.add(3);
set.add(6);
// console.log(set.size);
console.log(set);

set.forEach(function (value) {
  console.log(value);
});
