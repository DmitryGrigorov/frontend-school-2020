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

function Cat(name, state) {
  this.name = name;
  this.state = state;
}

Cat.prototype.meow = function() {
  console.log(`${this.name}: meow`);
};

Cat.prototype.up = function() {
  this.state = "standing";
};

Cat.prototype.down = function() {
  this.state = "lying";
};

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

let dictionary = {
  hello: "привет",
  "good morning": "доброе утро",
  undefined
};
// 3
// Напишите полифил для метода массива forEach

(function forEachPoly() {
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback) {
      for (let i = 0; i < this.length; i++) {
        callback(this[i]);
      }
    };
  }
})();

// 4
// Напишите полифил для метода массива join

Array.prototype.join = undefined;

(function joinPoly() {
  if (!Array.prototype.join) {
    Array.prototype.join = function(separator) {
      let result = this[0];

      for (let i = 1; i < this.length; i++) {
        result += separator + this[i];
      }

      return result;
    };
  }
})();

// 5 (наследование свойст без прототипов)
// Создайте два конструктора Animal и Dog
// У всех экземпляров класса Animal есть собственные (не наследуемые) свойства: { movingType, color }
// Например: const someAnimal = new Animal('walking', 'black'); // { movingType: 'walking', color: 'black' };
// А у экземпляров класса Dog есть собственные свойства: { name, age, weight }
// Например: const someDog = new Dog('tuzik', 4, 10); // { name: 'tuzik', age: 4, weight: 10 };
// Реализуйте наследование класса Animal классом Dog,
// так чтобы все экземпляры класса Dog имели свойства { movingType, color, name, age, weight };
// Например: const someDog = new Dog('walking', 'black', 'tuzik', 4, 10); // { movingType: 'walking', color: 'black', name: 'tuzik', age: 4, weight: 10 };

function Animal(movingType, color) {
  this.movingType = movingType;
  this.color = color;
}

function Dog(movingType, color, name, age, weight) {
  Animal.apply(this, [movingType, color]);
  this.name = name;
  this.age = age;
  this.weight = weight;
}

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

function Transport(status) {
  this.status = status;
  this.run = function() {
    this.status = "running";
    return this.status;
  };
  this.stop = function() {
    this.status = "stopped";
    return this.status;
  };
}

function Car() {}
const transport = new Transport("pending");
Car.prototype = transport;
const car = new Car();

