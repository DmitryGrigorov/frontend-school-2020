// конструктор с прототипом
/*
function Car() {
this.state = 'stopped';
}

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