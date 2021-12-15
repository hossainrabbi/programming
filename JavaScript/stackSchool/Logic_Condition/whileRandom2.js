let isRandom = true;

while (isRandom) {
  const randomNum = Math.floor(Math.random() * 10 + 1);

  if (randomNum === 10) {
    console.log('Wine wine!');
    isRandom = false;
  } else {
    console.log('Your Number is ' + randomNum);
  }
}
