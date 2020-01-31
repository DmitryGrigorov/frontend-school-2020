// конструктор с прототипом

// function Car(){
//     this.state = 'stopped';

// }


// Car.prototype.run = function(){
//     this.state = 'running';
// }

//console.log(Car === Car.prototype.constructor);

// const someCar = new Car();

// console.log(someCar);

// // someCar.__proto__.run
// // someCar
// someCar.run();

// способы задания прототипов

//let someObj = {};

// someObj.__proto__ = new Object({a:1});

// Object.setPrototypeOf(someObj,{b:1});

// const someObj = Object.create({c:3});
// const someObj = Object.create(null);

// console.log(someObj);

// someObj.hello = 'привет'

// console.log(someObj);

// встроенные объекты, полифилы

// const arr = ['a', 'b', 'c'];
// console.log(arr.join('-'));
// Array.prototype.join = undefined;
//console.log(arr.join('.'));

// (function(){
// if(!Array.prototype.join){
//     Array.prototype.join = function(separator){
//         var result = '';

//         for (var i = 0; i < this.length; i++){
//             if(result){
//                 result = result + separator + this[i];
//             } else {
//                 result = result + this[i];
//             }  
//         }

//         return result;
//     }
// }})();

// console.log(arr.join(','));
// защищенные свойства

function User(name){
    let age = 15;

    this.name = name;

    this.sayHello = function(){
        return this.name + 'says hello ' + age;
    }
}

const user = new User('Petya');

// console.log('user: ', user);
// console.log(user.sayHello());


// наследование свойств не из прототипа

function Animal(powCount){
    this.powCount = powCount;
}

Animal.prototype.run = function(){
    console.log('run');
}

function Cat(name, ...args){
    Animal.apply(this, args);

    this.name = name;
}

const prototypeConnector = Object.create(Animal.prototype);

Cat.prototype = prototypeConnector;
Cat.prototype.constructor = Cat;

const someAnimal = new Animal(4);
const someCat = new Cat('Barsik', 4);

console.log(someAnimal);
console.log(someCat.run());