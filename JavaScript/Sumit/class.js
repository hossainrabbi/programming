class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  print() {
    return `Your Name is ${this.name} and Age is ${this.age}.`;
  }
}

const person1 = new Person('Hossain Rabbi', 20);
console.log(person1);
console.log(person1.print());
