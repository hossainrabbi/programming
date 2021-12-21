const array = [0, 1, 2, 3, 4, 5];

// let sum = 0;
let evenSum = 0;
for (let i = 0; i < array.length; i++) {
  //   console.log(array[i]);
  //   array[i] = array[i] + 2;
  //   sum += array[i];
  if (array[i] % 2 === 0) {
    // console.log(array[i]);
    evenSum += array[i];
  }
}

// console.log(array);
// console.log(sum);
console.log(evenSum);
