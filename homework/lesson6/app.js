// 1
// Создайте конструктор Cat экземпляры которого (объекты созданные с помощью данного конструктора)
// должны содержать свойства { name, state }
// и должны наследовать методы из прототипа
// meow - выводит в консоль строку "ИМЯ_КОШКИ: meow"
// up - меняет состояние кошки на 'standing'
// down - меняет состояние кошки на 'lying'
//
// Например:
// const cat = new Cat('murzik');
// console.log(cat.name); // 'murzik'
// console.log(cat.state); // 'lying'
// cat.up();
// console.log(cat.state); // 'standing'
// cat.down();
// console.log(cat.state); // 'lying'
// cat.meow(); // выводит в консоль "murzik: meow"

// function Cat(name) {
//
//     this.name = name;
//     this.state = '';
//
// }
// const cat = new Cat('Murzik');
//
// Cat.prototype.meow = function () {
//     console.log(this.name + ': meow');
// };
//
// Cat.prototype.up = function () {
//     this.state = 'standing';
// };
//
// Cat.prototype.down = function () {
//     this.state = 'lying';
// };
//
// console.log(cat.name);
// cat.up();
// console.log(cat.state);
// cat.meow();

// 2
// Cоздайте объект dictionary в котором будут содержаться переводы слов с английского на русский
// при отсутсвии перевода в данном объекте - должно возвращаться значение undefined
//
// Например:
// dictionary['hello'] = 'привет';
// dictionary['good morning'] = 'доброе утро';
// console.log(dictionary['hello']); // 'привет'
// console.log(dictionary['good morning']); // 'доброе утро'
// console.log(dictionary['toString']); // undefined


// const dictionary = new Object(null);
//
// dictionary.hello = 'привет';
// dictionary['good morning'] = 'доброе утро';
//
// console.log(dictionary['good morning']);
// dictionary['world'] = 'мир';
// console.log(dictionary['world']);

// 3
// Напишите полифил для метода массива forEach

// (function () {
//     if (!Array.prototype.forEach) {
//         Array.prototype.forEach = function (arr, callback, thisArg) {
//             if (typeof callback !== 'function') {
//                 throw new TypeError(callback + ' is not a function');
//             };
//             for (var i = 0; i < arr.length; i++) {
//                 callback.call(thisArg, arr[i], i, arr);
//             }
//         }
//     }
// })();

// 4
// Напишите полифил для метода массива join

// (function () {
//     if(!Array.prototype.join) {
//         Array.prototype.join = function(separator) {
//             var defaultSeparator = '';
//             var result = '';
//
//             separator === undefined ? separator = defaultSeparator : separator;
//
//             for (var i = 0; i < this.length; i++) {
//                 result += result ? separator + this[i] : this[i];
//             }
//
//             return result;
//         }
//     }
// })();

// 5 (наследование свойст без прототипов)
// Создайте два конструктора Animal и Dog
// У всех экземпляров класса Animal есть собственные (не наследуемые) свойства: { movingType, color }
// Например: const someAnimal = new Animal('walking', 'black'); // { movingType: 'walking', color: 'black' };
// А у экземпляров класса Dog есть собственные свойства: { name, age, weight }
// Например: const someDog = new Dog('tuzik', 4, 10); // { name: 'tuzik', age: 4, weight: 10 };
// Реализуйте наследование класса Animal классом Dog,
// так чтобы все экземпляры класса Dog имели свойства { movingType, color, name, age, weight };
// Например: const someDog = new Dog('walking', 'black', 'tuzik', 4, 10); // { movingType: 'walking', color: 'black', name: 'tuzik', age: 4, weight: 10 };

// function Animal() {
//
//     this.movingType = 'walking';
//     this.color = 'black';
// }
// const animal = new Animal();
//
// function Dog() {
//
//     Animal.call(this);
//     this.name = 'tuzik';
//     this.age =  4;
//     this.weight = 10;
// }
// const dog = new Dog();
// console.log(dog);


// 6 (наследование через прототипы)
// Создайте два конструктора Transport и Car
// Эклемпляры конструктора Transport имеют свойтсво status и методы run и stop,
// которые меняют свойсто status на 'running' и 'stopped' соответсвтенно.
// Унаследуйте эти методы и свойство конструктором Car
//
// Например:
// const someTransport = new Transport();
// console.log(someTransport.status); // 'stopped'
// console.log(someTransport.run()); // 'running'
// console.log(someTransport.stop()); // 'stopped'
// const someCar = new Car();
// console.log(someCar.status); // 'stopped'
// console.log(someCar.run()); // 'running'
// console.log(someCar.stop()); // 'stopped'

// function Transport() {
//     this.status = '';
//
//     this.run = function() {
//         this.status = 'running';
//     };
//
//     this.stop = function() {
//         this.status = 'stopped';
//     };
// }
// let transport = new Transport();
//
// function Car() {
//     Transport.call(this);
// }
// let car = new Car();
// console.log(car);
