// Fat Arrow Function
// const number = () => {
//   return 10;
// };

// const number = () => 20;
// console.log(number());

const javaScript = {
  name: 'JavaScript',
  libraries: ['React', 'Angular', 'Vue'],
  printLibraries() {
    this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
  },
};

javaScript.printLibraries();
