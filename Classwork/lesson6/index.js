// function Car() {
//     this.state = "stopped";
// }
//
// Car.prototype.run = function() {
//     this.state = ("running");
// }

// console.log(Car === Car.prototype.constructor);
//
// const someCar = new Car();
// console.log(someCar);
// someCar.run();

// someObject = {};
// someObject.__proto__ = new Object({a: 1});
// Object.setPrototypeOf(someObject, {b: 1});
// console.log(someObject);

// const someObj = Object.create({c: 3});
//
// const arr = ['a', 'b', 'c'];
// console.log(Array.prototype);
// Array.prototype.join = undefined;
//
// if (!Array.prototype.join) Array.prototype.join = function (separator) {
//     var result = '';
//     for (var i = 0; i < this.length; i++) {
//         result += result ? separator + this[i] : this[i];
//     }
//     return result;
// }
//
// console.log(arr.join(''));

// function User(name) {
//     let age = 15;
//     this.name = name;
//     this.sayHello = function () {
//         return this.name + ' says Hello ' + age;
//     }
// }
//
// const user = new User('Petya');
// console.log('user: ', user);
// console.log(user.sayHello());

function Animal(powCount) {
    this.powCount = powCount;
}
Animal.prototype.run = function() {
    console.log('ruuun');
}

function Cat(name, ...args) {
    Animal.apply(this, args);
    this.name = name;
}
const prototypeConnector = Object.ceate(Animal.prototype);
Cat.prototype = prototypeConnector;
Cat.prototype.constructor = Cat;

const someAnimal = new Animal(4);
const someCat = new Cat('Barsik', 4);

console.log(someCat);
