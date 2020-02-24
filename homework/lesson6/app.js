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
/* -------
  1)Ответ:

function Cat(name, status) {
  this.name = name;
  this.state = "lying";
}

Cat.prototype.meow = function() {
  console.log(this.name + ": maow");
};
Cat.prototype.up = function() {
  this.state = "standing";
};
Cat.prototype.down = function() {
  this.state = "lying";
};

const cat = new Cat("myrzik");

// console.log(cat);
// cat.up();
// console.log(cat.state);
// cat.down();
// console.log(cat.state);
// cat.meow();
*/
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

/*--------
  2)Ответ:

  const dictionary = Object.create(null);

  dictionary.hello = "привет";
  dictionary.good_morning = "доброе утро";

console.log(dictionary);
console.log(dictionary['hello']);
console.log(dictionary['good_morning']);
console.log(dictionary['toString']);

*/
// 3
// Напишите полифил для метода массива forEach

/*
--------
3)Ответ:
Array.prototype.forEach = undefined;

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(fun) {
        for (var i = 0; i < this.length; i++) {
            fun(this[i]);
        }
    }
}
function logArrayElements(element) {
    console.log(element +1);
  };

let mass = [12,2,3,5,6,4,7];

mass.forEach(logArrayElements);

console.log(Array.prototype);
*/

// 4
// Напишите полифил для метода массива join
/*
---------
4)Ответ:
Array.prototype.join = undefined;

if(!Array.prototype.join) {
  Array.prototype.join = function (arg) {
    var result = '';
    for(var i =0; i< this.length; i++) { 
      result += this[i];
      if(this[i+1]) {
        result += arg;
      }
      
    }
    return result;
  }
}

const mass = [1,2,3,4,5,6];

console.log(mass.join(' + '));
*/
// 5 (наследование свойст без прототипов)
// Создайте два конструктора Animal и Dog
// У всех экземпляров класса Animal есть собственные (не наследуемые) свойства: { movingType, color }
// Например: const someAnimal = new Animal('walking', 'black'); // { movingType: 'walking', color: 'black' };
// А у экземпляров класса Dog есть собственные свойства: { name, age, weight }
// Например: const someDog = new Dog('tuzik', 4, 10); // { name: 'tuzik', age: 4, weight: 10 };
// Реализуйте наследование класса Animal классом Dog,
// так чтобы все экземпляры класса Dog имели свойства { movingType, color, name, age, weight };
// Например: const someDog = new Dog('walking', 'black', 'tuzik', 4, 10); // { movingType: 'walking', color: 'black', name: 'tuzik', age: 4, weight: 10 };
/*
  --------
  5)Ответ:

  function Animal (movingType, color) {
    this.movingType = movingType;
    this.color = color;
  }
  function Dog (name, age, weight, ...args) {
    Animal.apply(this, args);
    this.name = name;
    this.age = age;
    this.weight = weight;
  };
  
  const someDog = new Dog('tuzik', 4, 10, 'walking', 'black');

  console.log(someDog);
*/

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

/*
 --------
 6)Ответ:
 
function Transport() {
  this.status = "stopped";
}

Transport.prototype.run = function() {
  this.status = "running";
};
Transport.prototype.stop = function() {
  this.status = "stopped";
};
function Car(status, ...args) {
  Transport.apply(this, args);
}

Car.prototype = Object.create(Transport.prototype);
Car.prototype.constructor = Car;

const someTransport = new Transport();

console.log(someTransport.status);
someTransport.run();
console.log(someTransport.status);
someTransport.stop();
console.log(someTransport.status);
console.log("\n");

const someCar = new Car();
console.log(someCar.status);
someCar.run();
console.log(someCar.status);
someCar.stop();
console.log(someCar.status);
console.log(someCar);

*/
