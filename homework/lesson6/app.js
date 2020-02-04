// 1
//  + Создайте конструктор Cat экземпляры которого (объекты созданные с помощью данного конструктора)
//  + должны содержать свойства { name, state }
// и должны наследовать методы из прототипа
// + meow - выводит в консоль строку "ИМЯ_КОШКИ: meow"
// + up - меняет состояние кошки на 'standing'
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

// *** Решение задачи 1 ****
// конструктор CAT со свойствами "name" и "state" :
// function Cat (name,state) {
//         this.name = name;
//         this.state = 'lying';
//     }
//     // прототип ...
// Cat.prototype.meow = function() {
//         console.log(this.name + ": meow");
//     }
// Cat.prototype.up = function() {
//     this.state = "standing";
// }
// Cat.prototype.down = function() {
//     this.state = "lying";
// }

//     // проверка задания 1
// const cat = new Cat('murzik');
// console.log(cat.name); //  + 'murzik'
// console.log(cat.state); // + 'lying'
// cat.up();
// console.log(cat.state); // + 'standing'
// cat.down();
// console.log(cat.state); //  + 'lying'
// cat.meow(); // + выводит в консоль "murzik: meow"

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

//  Решение задания 2
//  ( я может не понял задания, но ... так работает по условию  )
// let dictionary = {
// }

// // проверка задания 2

// Добавляем поля объекта (переводы)
// dictionary['hello'] = 'привет';
// dictionary['good morning'] = 'доброе утро';

// console.log(dictionary['hello']); // 'привет'
// console.log(dictionary['good morning']); // 'доброе утро'
// console.log(dictionary['to String']); // undefined

// 3
// Напишите полифил для метода массива forEach

// 4
// Напишите полифил для метода массива join
// сделано в классе

// 5 (наследование свойст без прототипов)
// + Создайте два конструктора Animal и Dog
// + У всех экземпляров класса Animal есть собственные (не наследуемые) свойства: { movingType, color }
// Например: const someAnimal = new Animal('walking', 'black'); // { movingType: 'walking', color: 'black' };
// + А у экземпляров класса Dog есть собственные свойства: { name, age, weight }
// Например: const someDog = new Dog('tuzik', 4, 10); // { name: 'tuzik', age: 4, weight: 10 };
// Реализуйте наследование класса Animal классом Dog,
// так чтобы все экземпляры класса Dog имели свойства { movingType, color, name, age, weight };
// Например: const someDog = new Dog('walking', 'black', 'tuzik', 4, 10); // { movingType: 'walking', color: 'black', name: 'tuzik', age: 4, weight: 10 };

class Animal {
  constructor(movingType, color) {
    this.movingType = movingType;
    this.color = color;
  }
}

class Dog extends Animal {
  constructor(movingType, color, name, age, weight) {
    super(movingType, color);
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
}

const someAnimal = new Animal("walking", "black");
console.log(someAnimal);

const animalBlackDog = new Dog("walking", "black", "tuzik", 4, 10);
console.log(animalBlackDog);

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

class Transport {
  constructor(status) {
    this.status = status;
  }
  run() {
    this.status = "running";
  }
  stop() {
    this.status = "stopped";
  }
}

class Car extends Transport {
  //   constructor(status){
  //   super(status);
  //   }
}
///- проверка

let BMW = new Car("stopped");
console.log(BMW);
BMW.run();
console.log(BMW);
