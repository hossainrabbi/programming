const number = [1, 4, 5, 5, 6, 2, 1];

const duplicate = number.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});

number.forEach(function (value) {
  if (!duplicate.includes(value)) {
    console.log(value);
  }
});
