// конструктор с прототипом
<<<<<<< HEAD
/*
function Car() {
this.state = 'stopped';
}
=======
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
>>>>>>> 804a0ca05ab84d500a2d040fff12f4e2deb76229

Car.prototype.run = function() {
   this.state = 'runing';
}
*/


//const someCar = new Car();
//console.log(someCar);
//someCar.run();
//console.log(someCar);

//call apply ПОВТОРИТЬ!!!!!!!!!!!!!!!!!
// способы задания прототипов
<<<<<<< HEAD
/*let someObj = {};
someObj.__proto__ = {a: 1};

console.log(someObj);*/
/*
let someObj = {};

Object.setPrototypeOf(someObj,{b:1});
console.log(someObj);
*/
/*
const someObj = Object.create(null);

someObj.hello = 'привет'
console.log(someObj);
*/


// встроенные объекты, полифилы
/*
const arr =['a', 'b', 'c'];

console.log (arr.join('-'));
console.log(Array.prototype);
=======
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
>>>>>>> 804a0ca05ab84d500a2d040fff12f4e2deb76229


Array.prototype.join = undefined;
console.log (arr.join('.'));
function() {
if (!Array.prototype.join) {
   Array.prototype.join = function(separator) {

      var result = '';

      for (var i = 0; i < this.length; i++) {
         result += result ? separator + this[i] : this[i] : 
      }

      return result;
   }
})();
*/
// защищенные свойства
<<<<<<< HEAD
/*
function User (name) {
   let age = 15;
   this.name = name;

   this.sayHello = function() {
      return this.name + ' says hello' + age;
   }

}
const user = new User ('Pet');

console.log('user: ', user);
console.log(user.sayHello());
*/

// наследование свойств не из прототипа

//////
=======
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
  // *
  this.powCount = powCount;
}

Animal.prototype.run = function() {
  console.log('rUUUUn');
}

function Cat(name, ...args) {
  // this = {}
  Animal.apply(this, args);
  this.name = name;
}

const prototypeConnector = Object.create(Animal.prototype);

Cat.prototype = prototypeConnector;
Cat.prototype.constructor = Cat;
Cat.prototype.run = function() {
  console.log('cat run');
}

const someAnimal = new Animal(4);
const someCat = new Cat('barsik', 4);

// console.log(someAnimal);
// console.log(someCat.run());
console.log(someCat);
console.log(someCat.run());

let someObj = {
  a: 1,

  __proto__: {
    b: 2
  }
}

console.log(someObj);
console.log(someObj.a);
console.log(someObj.b);
someObj.a = 3;
console.log(someObj.a);
someObj.b = 4;
console.log(someObj);
>>>>>>> 804a0ca05ab84d500a2d040fff12f4e2deb76229
