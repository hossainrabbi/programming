const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(sentence) {
  let count = 0;
  const letters = Array.from(sentence.toLowerCase());

  letters.forEach(function (value) {
    if (vowels.includes(value)) {
      count++;
    }
  });

  return count;
}

console.log(countVowels('I Love Bangladesh'));
