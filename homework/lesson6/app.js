// 1
// Создайте конструктор Cat экземпляры которого (объекты созданные с помощью данного конструктора)
// должны содержать свойства { name, state }
// и должны наследовать методы из прототипа
// meow - выводит в консоль строку "ИМЯ_КОШКИ: meow"
// up - меняет состояние кошки на 'standing'
// down - меняет состояние кошки на 'lying'
//
// function Cat(name) {
//     this.name=name;
//     this.state='lying';
//     }
//     Cat.prototype.meow=function () {
//     console.log( this.name + ': meow');
//     }
//     Cat.prototype.up = function(){
//     this.state = 'standing';
//
//     }
//     Cat.prototype.down = function(){
//     this.state='lying';
//     }
//
// // Например:
// const cat = new Cat('murzik');
// console.log(cat.name); // 'murzik'
// console.log(cat.state); // 'lying'
// cat.up();
// console.log(cat.state); // 'standing'
// cat.down();
// console.log(cat.state); // 'lying'
// cat.meow(); // выводит в консоль "murzik: meow"


// 2
// Cоздайте объект dictionary в котором будут содержаться переводы слов с английского на русский
// при отсутсвии перевода в данном объекте - должно возвращаться значение undefined
//

// let dictionary = {
//     // hello: 'привет',
//     //'good morning' : 'доброе утро',
//     development: 'разработка',
//     'new': 'новый'
// }
// dictionary = Object.create(null);
// // Например:
// dictionary['hello'] = 'привет';
// dictionary['good morning'] = 'доброе утро';
// console.log(dictionary['hello']); // 'привет'
// console.log(dictionary['good morning']); // 'доброе утро'
// console.log(dictionary['toString']); // undefined

// 3
// Напишите полифил для метода массива forEach
// Array.prototype.forEach = undefined;
// let a = [1, 2, 3];
// let b = [];
// let c = ['a', 'b', 'c'];
//
// (function () {
//         if (!Array.prototype.forEach) {
//             Array.prototype.forEach = function (callback, thisArg) {
//                 if (thisArg) {
//                     for (let i = 0; i < thisArg.length; i++) {
//                         callback(thisArg[i], i, thisArg);
//                     }
//                 } else {
//                     for (let i = 0; i < this.length; i++) {
//                         callback(this[i], i, this);
//                     }
//                 }
//
//                 return undefined;
//             }
//         }
//     }
// )


// 4
// Напишите полифил для метода массива join

Array.prototype.join = undefined;
let a = [1, 2, 3];
let b = [];
let c = ['a', 'b', 'c'];

// (function () {
//     if (!Array.prototype.join) {
//         Array.prototype.join = function (separator) {
//             let result = '';
//             if (separator) {
//                 for (let i = 0; i < this.length - 1; i++) {
//                     result += result ? separator + this[i] : this[i];
//                 }
//
//             } else {
//                 for (let i = 0; i < this.length - 1; i++) {
//                     result += result ? ',' + this[i] : this[i];
//                 }
//
//             }
//             return result;
//
//         }
//     }
// });
// 5 (наследование свойст без прототипов)
// Создайте два конструктора Animal и Dog
// У всех экземпляров класса Animal есть собственные (не наследуемые) свойства: { movingType, color }
// Например: const someAnimal = new Animal('walking', 'black'); // { movingType: 'walking', color: 'black' };
// А у экземпляров класса Dog есть собственные свойства: { name, age, weight }
// Например: const someDog = new Dog('tuzik', 4, 10); // { name: 'tuzik', age: 4, weight: 10 };
// Реализуйте наследование класса Animal классом Dog,
// так чтобы все экземпляры класса Dog имели свойства { movingType, color, name, age, weight };
// Например: const someDog = new Dog('walking', 'black', 'tuzik', 4, 10); // { movingType: 'walking', color: 'black', name: 'tuzik', age: 4, weight: 10 };
//
// function Animal(movingType, colour) {
//     this.movingType = movingType;
//     this.colour = colour;
// }
//
// function Dog(name, age, weight, ...args) {
//     Animal.apply(this, args);
//     this.name = name;
//
//     this.age = age;
//     this.weight = weight;
//
//
// }
//

//
// let bobik = new Dog('Bobik', '3', '4', 'walking', 'black');
//console.log(bobik);

// 6 (наследование через прототипы)
// Создайте два конструктора Transport и Car
// Эклемпляры конструктора Transport имеют свойтсво status и методы run и stop,
// которые меняют свойсто status на 'running' и 'stopped' соответсвтенно.
// Унаследуйте эти методы и свойство конструктором Car
//
function Transport() {

}

Transport.prototype.status = 'stopped';
Transport.prototype.run = function () {
    this.status = 'running';
    return this.status;


};
Transport.prototype.stop = function () {
    this.status = 'stopped';
    return this.status;


};

function Car() {

}

Car.prototype = Object.create(Transport.prototype);
Car.prototype.constructor = Car;
// // Например:
const someTransport = new Transport();
console.log(someTransport.status); // 'stopped'
console.log(someTransport.run()); // 'running'
console.log(someTransport.stop()); // 'stopped'
const someCar = new Car();
console.log(someCar.status); // 'stopped'
console.log(someCar.run()); // 'running'
console.log(someCar.stop()); // 'stopped'