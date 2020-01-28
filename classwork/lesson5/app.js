/* 
  // INTRO. Вспомним объявления функций

  function ninjaFunction1() {} // function declaration

  let ninjaFunction2 = function () {} // function expression

  let ninjaFunction2 = function func() {} //  NFE, named function expression

  myArg => myArg // стрелочная функция

  new Function('a', 'b', 'return a + b') // функция конструктор
*/

// Поговорим о функция this, arguments


  // 1. Рекурсия

  // 1.1 Функция chirp
/*
  function chirp(n) {
    if(n === 1) {
      return 'chirp'
    }

    return chirp(n-1) + '-chirp'
  }
  console.log(chirp(3));
  */
/*
  //  1.2 Напишем функцию которая возводит в натуральную степень.

  // через цикл
  function pow(x, n) {
    let result = 1;

    // умножаем result на x n раз в цикле
    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }

  console.log( pow(2, 3) ); // 8

  // через рекурсию 

  function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }

  console.log( pow(2, 3) ); // 8

*/


/*
  // 2. Замыкание

  // 2. 1 Простой пример замыкания
  let outerValue = 'ninja'; // определили переменную в глобальной области видимости
  function outerFunction() { // объявили функцию в глобальной области видимости
    console.log(outerValue);
  }

  outerFunction(); // Запускаем функцию
*/

/*
// 2. 2 Еще один пример замыкания

  let outerValue = "samurai";
  let later;

  function outerFunction() {
    let innerValue = "ninja";

    function innerFunction() {
      console.log("Переменная innerValue: ", innerValue); // Переменная из области видимости outerFunction
      console.log("Переменная outerValue:", outerValue) // Переменная из 
    }

    later = innerFunction; // сохранить ссылку на innerFunction 
  }

  outerFunction(); //  вызов приведет к созданию ссылки innerFunction в переменной later;
  later();  // вызов ф-ции innerFunction через переменную later
*/



/*
  // 2. 3 Пример счётчик

  function makeCounter() {
    let count = 0; 

    return function() {
      return count++; // есть доступ к внешней переменной "count"
    };
  }

  let counter = makeCounter();

  console.log( counter() ); // 0
  console.log( counter() ); // 1
  console.log( counter() ); // 2
/*




/*
  //  Что выведет пример ниже ?

  let name = "John";

  function sayHi() {
    alert("Hi, " + name);
  }

  name = "Pete";

  sayHi(); // что будет показано: "John" или "Pete"?
*/


/*
  //  Что выведет пример ниже ?
  function makeWorker() {
    let name = "Pete";

    return function() {
      alert(name);
    };
  }

  let name = "John";

  // create a function
  let work = makeWorker();

  // call it
  work();
*/




//  2.4 Блоки кода и циклы

/*
  // Вопрос: что выведет console.log('user: ', user)
  let phrase = "Hello";

  if(true) {
    let user = "John";
    console.log(`${phrase}, ${user}`);
  }

  console.log('user: ', user);
*/

/*
  // For, while

  for(let i = 0; i < 10; i++) {

  }

  console.log(i) // переменная i недоступна потому что она находится в области видимотси цикла
*/


// 3. Объект функции, NFE

// 3.1 Свойство name, length

//function functionDeclarationName(a, b) {}

//const functionExpression = function (a,b,c,d) {}

//console.log('functionDeclarationName.name: ', functionDeclarationName.name);
//console.log('functionDeclarationName.length: ', functionDeclarationName.length);

//console.log('functionExpression.names: ', functionExpression.name);
//console.log('functionExpression.length: ', functionExpression.length);

// 3.1 Пользовательские свойства

/*

  // Пример 1:
  function sayHi() {
    console.log("Hi");

    // давайте посчитаем, сколько вызовов мы сделали
    sayHi.counter++;
  }

  sayHi.counter = 0; // начальное значение

  sayHi(); // Hi
  sayHi(); // Hi

  console.log( `Вызвана ${sayHi.counter} раза` ); // Вызвана 2 раза


  // Пример 2:

  // Иногда свойства функции могут использоваться вместо замыканий.
  // Например, мы можем переписать функцию-счётчик из главы Замыкание, используя её свойство:

  function makeCounter() {
    // вместо
    // let count = 0

    function counter() {
      return counter.count++;
    };

    counter.count = 0;

    return counter;
  }

  let counter = makeCounter();
  alert( counter() ); // 0
  alert( counter() ); // 1


  // Свойство count теперь хранится прямо в функции, а не в её внешнем лексическом окружении.

  // Это хуже или лучше, чем использовать замыкание?

  // Основное отличие в том, что если значение count живёт во внешней переменной,
  // то оно не доступно для внешнего кода. Изменить его могут только вложенные функции.
  // А если оно присвоено как свойство функции, то мы можем его получить:


  function makeCounter() {

    function counter() {
      return counter.count++;
    };

    counter.count = 0;

    return counter;
  }

  let counter = makeCounter();

  counter.count = 10;

  alert( counter() ); // 10
*/


// 3.2 NFE — named function expression

  // Function Expression:
/*
  let sayHi = function(who) {
    alert(`Hello, ${who}`);
  };

  // Named Function Expression:

  let sayHi = function func(who) {
    alert(`Hello, ${who}`);
  };

  // Синтаксис "new Function"

  let sum = new Function('a', 'b', 'return a + b');

  alert( sum(1, 2) ); // 3


  let sayHi = new Function('alert("Hello")');

  sayHi(); // Hello
*/


/*
// IIFE (immediately-invoked function expressions)s

//  Способы создания IIFE:

// (function() {
//   alert("Скобки вокруг функции");
// })();

// (function() {
//   alert("Скобки вокруг всего");
// }());

// !function() {
//   alert("Выражение начинается с побитового оператора NOT");
// }();

// +function() {
//   alert("Выражение начинается с унарного плюса");
// }();

*/
/*
let user = { name: "Джон" };
let admin = { name: "Админ" };
let bob = { name: "Боб" };
function sayHi() {
  alert( this.name );
}

// используем одну и ту же функцию в двух объектах
user.f = sayHi;
admin.f = sayHi;
bob.f = sayHi;

// вызовы функции, приведённые ниже, имеют разное значение this
// "this" внутри функции является ссылкой на объект, который указан "перед точкой"
user.f(); // Джон  (this == user)
admin.f(); // Админ  (this
bob.f();
*/



