const arr = [10, 25, 65, 15, 25, 68, 48, 65];
let isFound = false;

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] === 65) {
    console.log('Data is line of: ', i + 1);
    isFound = true;
    break;
  }
}

if (!isFound) {
  console.log('Data not found');
}
