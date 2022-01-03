const car = {
  weight: '850kg',
  color: 'White',
  start: function () {
    console.log('The Car is started!');
    this.drive();
  },
  drive: function () {
    console.log('The car is Driving and car color is ' + this.color + '.');
  },
};

car.drive();
console.log(car.weight);
car.start();
console.log(car['color']);
