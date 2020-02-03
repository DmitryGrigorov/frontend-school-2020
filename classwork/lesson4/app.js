// создание объектов, добавление/удаление свойств *
// let someObject = new Object;

// let user ={
// propt1: 100,
// propt2: 'hello',
// return: 'wer'
// }
// имя свойства из нескольких слов, квадратные скобки
// user.name = 'Alex';
// console.log (user);
// delete user.propt;
// console.log (user);

// let car = {
//     model: 'Lada',
//     'max speed': 100
// }

// вычисляемые свойства[], свойства из переменных

// car['car' + 'prop'] = 'Granta'
// console.log (car);
// console.log(car.model);
// console.log (car['max speed']);
// let key1 = 'max ';
// let key2 = 'speed';
// console.log(car[key1 + key2]);

// проверка существования свойств
// console.log(car.age === undefined);
// console.log('model' in car)

// цикл for..in
// let someObject2  ={
//     someProp1: 'prop',
//     someProp2: 500
// }

// for (let key in someObject2) {
//     console.log(key);   // выводим имя свойства
//     console.log(someObject2[key]); // выводим значение свойства
// }

// копирование по ссылке
// let str1 = 'hello word';
// let str2 = str1;
// str1 = 'new word';
// console.log(str1);
// console.log(str2);

// let car1 = {
//     model: "LADA",
//     color: "black"
// }

// let car2 = car1 // копируется ссылка на объект, а не значение
// car1.color = 'whte';
// console.log(car2);

// сравнение объектов
//  при сравнении сравниваются ссылки на объекты, а не их значения

// клонирование и объединение объектов
// function clone (someObject){
//     let cloneObj = {};
//     for (let prop in someObj ) {
//         cloneObj[prop]=someObj[prop];

//     }
//     return cloneObj;
// }
// let car1 = {
//     model: 'LADA'
// }

/**
 * написать функцию filter которая принимает в качестве аргумента любой объект
 * и удаляет в нем свойства, значение которых = undefined
 */

//  function filter(obj) {
//      for (let key in object) {
//          if (obj[key] === undefined) {
//              delete obj[key];
//          }
//         }
//     }

// let car3 = {
//     color: undefined,
//     model: ''
// }

// console.log(car3);
// filter(car3);
// console.log(car3);

/*
 * Например: filter({ color: 'black', model: 'mercedes', speed: undefined }); // { color: 'black', model: 'mercedes' }


 /* как сделать так, чтобы функция возвращала новый объект?
 * как сделать глубокую фильтрацию свойств объекта?
 * 
 */

/*
 *
 * написать функцию clone, которая принимает в качестве аргумента объект и возвращает новый объект с такой же структурой
 * Например:
 * const nick = { name: 'Nick', age: 20 };
 * const notNick = clone(nick);
 * console.log(nick === notNick); // false
 *
 *
 *
 * написать функцию clonePart которая принимает первым аргументом объект, а последующими - строки (колличество аргументов не ограничено)
 * clonePart должна вернуть новый объект со свойствами которые совпадают со значениями аргументов функции
 * Например:
 * clonePart({ type: 'success', message: 'text-text', authorId: 'qwerty' }, 'message', 'authorId'); // вернет новый объект => { message: 'text-text', authorId: 'qwerty' }
 */

//  function sumFunction(first,second,...allParam) {
//      console.log(allParam);
//      console.log(...allParam);

//      console.log(arguments);
//  }
// sumFunction(1,2,'k',3,4,5,6,7,8);
// *** *** ***

// function clonePart(obj, ...keys) {
//   const clone = {};
//   for (let key in obj) {
//     if (keys.includes(keys)) {
//       clone[key] = obj[key];
//     }
//   }
//   return clone;
// }
// let cl = clonePart(comment, "message", "authorId"); // вернет новый объект => { message: 'text-text', authorId: 'qwerty' }

// методы объекта, cокращённая запись метода *

// let user = {
//     name: 'Bob',
//     age: 100,
//     sayHello: function() {
//         console.log('Hello!');
//     },
// };

// user.sayHello();

// Ключевое слово «+this» в методах *

// потеря this - ссылочный тип

// преобразование объектов в примитивы string, number, default *

// Конструкторы, создание объектов через "new" *

/**
 * есть объект car = { state: 'stopped', model: 'ГАЗ' }
 * добавьте метод run(); при вызове которого state должно меняться на running
 * добавьте метод stop(); при вызове которого state должно меняться на stopped
 *
 * есть объект item = { label: 'kettle', power: 1300 }
 * cделать так чтобы при преобразовании объекта к числу возвращалось поле power
 * а при преобразовании к строке - строка вида "kettle - 1300 watt"
 *
 * написать конструктор Cat которой создает объекты со свойствами name, state, color
 * и методами
 *
 * cat.meow(); // => выводит в консоль "{{имя_кошки}}: meow"
 * cat.down(); // меняет свойство state на строку 'lying'
 * cat.up(); // меняет свойство state на строку 'standing'
 */

// Урок 5 27 01 2020

//   function greet(...args){  // ...args -spred оператор
//        console.log(args.sort());
//       console.log()  // \\
//       return 'Hi, ' + name;
//   }

// greet('name1','name2','name3','name4')

// // пример 2
//   function greet(){  // ...args -spred оператор

//       return 'Hi, ' + this.name;
//   }
//   let user1 = {
//       name: "Jack",
//       greet
//   }

//   let user2 = {
//     name: "BOB",
//   }

//   let bound = user1.greet.bind(user1);
//   console.log(bound());

// // 3 . сортировка аргументов функции

//   function func() {
//       return [].sort.call(arguments);
//   }
// console.log(func(7,1,5,3))

//  ***** РЕКУРСИЯ ************

// function chirp(n) {
//     if (n == 1) {
//         return 'chirp';
//     }

// return chirp(n-1) + '-chirp';
// }

// console.log(chirp(5))

// задание 1

function exp1(x, n) {
  if (n == 1) {
    return x;
  }
  return x * exp1(x, n - 1);
}

console.log(exp1(2, 3));
 //*** ***  */