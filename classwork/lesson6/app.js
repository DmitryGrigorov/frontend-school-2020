//  ---  1  --
//  конструктор с прототипом

// function Car(){
//     this.state = 'stopped';

// }
// Car.prototype.run = function() {
//     this.state = 'running';
//console.log('running');
//}
/// **** пример 1
// const someCar = new Car();
// console.log(someCar);  // выведем все свойства объекта
// someCar.run();   // someCar.__proto__.run()
// console.log(someCar);  // выведем все свойства объекта

//   -- 2  ---
// способы задания прототипов
// let someObj = {};
// // вариант 2.1  - только в браузере
// // someObj.__proto__ = new Object({ a: 1});

// // вариант 2.2 - ХОРОШИЙ -
// // Object.setPrototypeOf(someObj, {b: 1});

// // Вариант 3
// //const someObj = Object.create({a: 1 });
// //const someObj = Object.create(null);  - объект БЕЗ прототипа !!!

// console.log(someObj);

//  --- 3 ----
// встроенные объекты, полифилы
// полифил - реализация нового методы с помощью старых спсобов
// const arr = ['a','b','c']; // равносильно созданию экз. класса Аррей:  new Arrey
// console.log(arr.join('-')); // соу
//   // пример
//   Array.prototype.join = undefined;
//   console.log(arr.join('-'));
// console.log(Array.prototype);

// (function (){
// if (!Array.prototype.join){
//     Array.prototype.join = function (delimiter){
//         var result = '';
//         // здесь this - > join
//         for (var i=0; i < this.length; i++) {
//             result += result ? delimiter + this[i]: this[i];
//         }
//         return result;
//     }
// }
// })();

//  --- 4 ---
// защищенные свойства

// function User (name) {
//     this.name;

//     this.sayHello = function() {
//         return this.name + ' say Hello'
//     }
// }

// const user = new User('PETYA');
// console.log('user: ', user);

//  --- 5 ---
// наследование свойств не из прототипа
// в прототип выносятся все методы
// Свойства не выносятся в прототтип

// function Animal(powCount) {
//   this.powCount = powCount;
// }

// Animal.prototype.run = function() {
//   console.log("ruuuun");
// };

// function Cat(name) {
//   Animal.call(this, 4); // все свойства Animal передаются новому КОТУ ( здесь - 4 лапы)
//   this.name = name;
// }

// const prototypeConnector = Object.create(Animal.prototype);
// Cat.prototype = prototypeConnector;
// Cat.prototype.construcor = Cat;

// const somAnimal = new Animal(4);
// const someCat = new Cat("barsik");

// // console.log(somAnimal);
// // console.log(someCat);
// console.log(someCat.run);

// --- 6 ---
// Свойство из прототипа можно только получить
// на запись это не работает
