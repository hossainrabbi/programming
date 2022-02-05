const person = {
  name: 'Hossain Rabbi',
  age: 21,
  sex: 'Male',

  identify() {
    return `My Name is ${this.name} and age is ${this.age}.`;
  },
};

const person2 = person;
person2.age = 22;

delete person2.sex;

console.log(person.age); // 22
console.log(person.sex); // undefined
console.log(person.identify());
document.getElementById('identify').innerText = person2.identify();

// console.log(person);
// person.age = 23;

const testPerson = {
  name: 'Hossain Rabbi',
  age: 21,
  sex: 'Male',
};

console.log(Object.values(testPerson));

let text = '';
for (let i in testPerson) {
  text += testPerson[i] + ' ';
}

document.getElementById('test').innerText = text;
