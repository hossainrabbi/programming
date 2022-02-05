function leapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return `${year} is a Leap Year.`;
  }

  return `${year} is not a Leap Year.`;
}

console.log(leapYear(2028));
