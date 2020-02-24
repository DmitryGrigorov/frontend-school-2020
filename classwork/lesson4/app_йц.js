// создание объектов, добавление/удаление свойств *
// let someObject = new Object();
// let user = {
//   prop1: 100,
//   promp2: "hello",
//   return: "wwqr"
// };

// user.name = "Nick";
// delete user.name;

// console.log(user);
// имя свойства из нескольких слов, квадратные скобки

// let car = {
//     'max speed' : 200
// };

// let key1 = 'max ';

// let key2 = 'speed';

// console.log (car[key1 + key2]);

// вычисляемые свойства[], свойства из переменных

// let key1 = 'qwe';
// let key2 = 'qwewq';
// let car2 = {
//     [key1 + key2] : 1234
// };

// console.log(car2);
// проверка существования свойств

// let item = {
//     label: 'orange',
//     price: 500,
//     age: undefined
// };

// console.log(item.label);

// console.log('age' in item);
// цикл for..in
//     let someObject = {
//         someProp1: 'wqe',
//         someProp2: 500
//     };

//  for(let key in someObject) {
//     console.log(key);
//     console.log(someObject[key]);

//  }
// копирование по ссылке

//  let str1 = 'hello word';
//  let str2 =str1; // первая копир во вторую

//  str1 = str1 + '!!!!';
//  console.log(str1);
//  console.log(str2);

//  let car1 = {
//      model: "bmw",
//      color: "black"
//  };

//  let car2 = car1;
//  car1.speed =100;
//  console.log(car2);
// сравнение объектов

// клонирование и объединение объектов

// function clonebj (someObj) {
//     let cloneObj = {};

//     for (let prop in someObj)
// }

// function filter (obj) {
//     for (let key in obj) {
//         if(obj[key] === undefined) {
//             delete obj[key];
//         }
//     }
// }

// function filterClone (obj) {
//     let clone = {};
//     for (let key in obj) {
//         const value = obj[key]


        
//         }
//     }
//     return clone;
// }

// let car = {
//     color: undefined,
//     model: 'bmw'
// };

// filter(car);
// console.log(car);

/**
 * написать функцию filter которая принимает в качестве аргумента любой объект
 * и удаляет в нем свойства, значение которых = undefined
 *
 * Например: filter({ color: 'black', model: 'mercedes', speed: undefined }); // { color: 'black', model: 'mercedes' }
 * как сделать так, чтобы функция возвращала новый объект?
 * как сделать глубокую фильтрацию свойств объекта?
 *
 * написать функцию clone, которая принимает в качестве аргумента объект и возвращает новый объект с такой же структурой
 * Например:
 * const nick = { name: 'Nick', age: 20 };
 * const notNick = clone(nick);
 * console.log(nick === notNick); // false
 *
 * написать функцию clonePart которая принимает первым аргументом объект, а последующими - строки (колличество аргументов не ограничено)
 * clonePart должна вернуть новый объект со свойствами которые совпадают со значениями аргументов функции
 * Например:
 * clonePart({ type: 'success', message: 'text-text', authorId: 'qwerty' }, 'message', 'authorId'); // вернет новый объект => { message: 'text-text', authorId: 'qwerty' }
 */

// методы объекта, cокращённая запись метода *

// Ключевое слово «this» в методах *

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
