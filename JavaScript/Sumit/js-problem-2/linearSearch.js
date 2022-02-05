// input: linearSearch(['a', 'b', 'c', 'd', 'c'], 'c');
// output: 2 or 'not found';
// problem: linearSearch() function টি implement করে দেখানো।

function linearSearch(arr, value) {
  const length = arr.length;
  for (let i = 0; i <= length; i++) {
    if (arr[i] === value) return i;
  }

  return 'not found!';
}

console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'c'));
