const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]); // Even
//   }
// }

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    console.log(arr[i]); // odd
  }
}
