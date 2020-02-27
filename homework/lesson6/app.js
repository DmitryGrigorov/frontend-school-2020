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

function Cat(name, state = "lying") {
  this.name = name;
  this.state = state;
}

Cat.prototype.up = function() {
  this.state = "standing";
};

Cat.prototype.down = function() {
  this.state = "lying";
};

Cat.prototype.meow = function() {
  console.log(`${this.name}: meow`);
};

// const cat = new Cat("murzik");
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
// Например:
// dictionary['hello'] = 'привет';
// dictionary['good morning'] = 'доброе утро';
// console.log(dictionary['hello']); // 'привет'
// console.log(dictionary['good morning']); // 'доброе утро'
// console.log(dictionary['toString']); // undefined

const dictionary = Object.create(null);

// dictionary["hello"] = "привет";
// dictionary["good morning"] = "доброе утро";
// console.log(dictionary["hello"]); // 'привет'
// console.log(dictionary["good morning"]); // 'доброе утро'
// console.log(dictionary["toString"]); // undefined

// 3
// Напишите полифил для метода массива forEach

Array.prototype.forEach = undefined;
const arr = [1, 2, 3, 4];
// arr.forEach(el => console.log(el)); // ошибка

(function() {
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback) {
      for (var i = 0; i < this.length; i++) callback(this[i]);
    };
  }
})();

// arr.forEach(el => console.log(el));

// 4
// Напишите полифил для метода массива join
Array.prototype.join = undefined;
// console.log(arr.join("%")); // ошибка

(function() {
  if (!Array.prototype.join) {
    Array.prototype.join = function(sep) {
      var str = "";
      for (var i = 0; i < this.length; i++) {
        str += str ? String(sep) + this[i] : this[i];
      }
      return str;
    };
  }
})();

// console.log(arr.join("&")); // ошибка

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
  Animal.call(this, movingType, color);
  this.name = name;
  this.age = age;
  this.weight = weight;
}

const someAnimal = new Animal("walking", "black");
// console.log(someAnimal);

const someDog = new Dog("walking", "black", "tuzik", 4, 10);
// console.log(someDog);

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

function Transport(status = "stopped") {
  this.status = status;
}

Transport.prototype.run = function() {
  this.status = "running";
};

Transport.prototype.stop = function() {
  this.status = "stopped";
};

function Car() {
  Transport.call(this);
}

const connectToTransport = Object.create(Transport.prototype);

Car.prototype = connectToTransport;
Car.prototype.constructor = Car;
// console.log(Car.prototype);

const someTransport = new Transport();
console.log(someTransport.status); // 'stopped'
someTransport.run(); // 'running'
console.log(someTransport.status); // 'running'
someTransport.stop(); // 'stopped'
console.log(someTransport.status); // 'stopped'

const someCar = new Car();
// console.log(someCar.__proto__);

console.log(someCar.status); // 'stopped'
someCar.run(); // 'running'
console.log(someCar.status); // 'running'
someCar.stop(); // 'stopped'
console.log(someCar.status); // 'stopped'
