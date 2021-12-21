const arr = [2, 5, 4, 8, 6, 54, 4, 2, 3, 6];
let isFound = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 33) {
    console.log('Data found line of: ', i + 1);
    isFound = true;
    break;
  }
}

if (!isFound) {
  console.log('Data not Found');
}
