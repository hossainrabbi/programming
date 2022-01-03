const myName = 'Hossain Rabbi';
const str = 'My Name:';
const str2 = '           Abc               ';

// String.length
console.log(myName.length);

// String.slice
console.log(myName.slice(6, 9));
console.log(myName.slice(6));
console.log(myName.slice(-5, -3));
console.log(myName.slice(-5));

// String.substring
console.log(myName.substring(6, 9));

// String.substr
console.log(myName.substr(6, 3));
console.log(myName.substr(6));
console.log(myName.substr(-5));

// String.replace
console.log(myName.replace('Rabbi', 'Rabby'));

// String.toUpperCase & String.toLowerCase
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// String.concat
console.log(str.concat(' ', myName));

// String.trim()
console.log(str2.trim());

// String.charAt
console.log(myName.charAt(0));

console.log(myName[1]);

// String.split
console.log(myName.split());
console.log(myName.split(' '));
console.log(myName.split(''));
