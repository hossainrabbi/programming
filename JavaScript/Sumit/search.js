let str = "Please locate where 'locate' occurs!";

const fStr = str.indexOf('locate');
console.log(fStr);

const lStr = str.lastIndexOf('locate');
console.log(lStr);

const fStr2 = str.indexOf('locate', 8);
console.log(fStr2);

const lStr2 = str.lastIndexOf('locate', 6);
console.log(lStr2);
