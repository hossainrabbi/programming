function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
}

const hossain = new Person('Hossain', 'Rabbi', 21);
const rohan = new Person('Rohan', 'Hossain', 20);

console.log(hossain.fullName());

// Person.size = '5.6"'; // not working
hossain.size = '5.6"';

console.log(hossain.size); // 5.6"
console.log(rohan.size); // undefined

console.dir(hossain);
