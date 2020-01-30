
// конструктор с прототипом
// function  Car() {
//     this.state = 'stopped'
// }

// Car.prototype.run = function() {
//     console.log('running');
// }

// const someCar = new Car();
// console.log(someCar);

// способы задания прототипов


// встроенные объекты, полифилы
// Array.prototype.join = undefined;
// let arr = [];
// (function () {
// if (!Array.prototype.join) {
//     Array.prototype.join = function(separatop) {
//         var result = '';
//         for (var i = 0; i < this.length; i++) {
//             result += result ? separatop + this[i] : this[i]
//         }

//         return result;
//     }
// }
// })();

// console.log(arr.join('.'));

// защищенные свойства

// function User(name) {
//     this.name = name;

//     this.sayHello = function() {
//         return this.name + 'says hello';
//     }
// }

// const user = new User('Ryg');
// console.log('user :', user)
// наследование свойств не из прототипа

