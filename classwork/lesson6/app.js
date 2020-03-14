// конструктор с прототипом
// function Car() {
//   this.state = 'stopped';
// }

// Car.prototype.run = function() {
//   this.state = 'running';
// }

// console.log(Car === Car.prototype.constructor);
// const someCar = new Car();
// console.log(someCar);
// someCar.run();
// console.log(someCar);

// someCar.__proto__.run
// someCar

// способы задания прототипов
// let someObj = {};
// someObj.__proto__ = new Object({ a: 1 });
// console.log(someObj);

// Object.setPrototypeOf(someObj, { b: 1 });
// console.log(someObj);

// const someObj = Object.create(null);

// someObj.hello = 'привет';
// console.log(someObj);

// встроенные объекты, полифилы
// const arr = ['a', 'b', 'c']; // new Array();
// console.log(arr.join('-'));
// Array.prototype.join = undefined;
//  смотри join-polyfill.js

// защищенные свойства
// function User(name) {
//   let age = 15;

//   this.name = name;

//   this.sayHello = function() {
//     return this.name + ' says hello ' + age;
//   }
// }
// const user = new User('Petya');
// console.log('user: ', user);
// console.log(user.sayHello());


// наследование свойств не из прототипа

function Animal(powCount) {

    this.powCount = powCount;
}

Animal.prototype.run = function () {
    console.log('rUUUUn');
}

function Cat(name, ...args) {
    // this = {}
    Animal.apply(this, args);
    this.name = name;
}

// const prototypeConnector = Object.create(Animal.prototype);
//
// Cat.prototype = prototypeConnector;
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.run = function () {
    console.log('cat run');
}

const someAnimal = new Animal(4);
const someCat = new Cat('barsik', 4);

// console.log(someAnimal);
someCat.run();


console.log(someCat);
someAnimal.run();
// let someObj = {
//   a: 1,
//
//   __proto__: {
//     b: 2
//   }
// }
//
// console.log(someObj);
// console.log(someObj.a);
// console.log(someObj.b);
// someObj.a = 3;
// console.log(someObj.a);
// someObj.b = 4;
// console.log(someObj);
