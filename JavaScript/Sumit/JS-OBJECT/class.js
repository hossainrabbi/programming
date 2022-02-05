class Car {
  constructor(brand) {
    this.carName = brand;
  }

  static test(pera = 0) {
    return 'Test ' + pera;
  }

  present() {
    return `My Car Name is ${this.carName}`;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  show() {
    return `${this.present()} . It's model is ${this.model}.`;
  }
}

const bmw = new Model('BMW', 'Samsung');
console.log(bmw.show());

console.log(Car.test(1));
