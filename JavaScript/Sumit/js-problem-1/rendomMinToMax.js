// লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যায় প্রিন্ট করতে পারি ? Print 1 to 6 randomly
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randResult = randomNumber(1, 6);
console.log(randResult);
