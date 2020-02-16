/*
    1) Переписать функцию-конструктор из урока №6 с использованием классов

    Создайте класс Cat экземпляры которого (объекты созданные с помощью данного конструктора)
    должны содержать свойства { name, state }
    и должны наследовать методы из прототипа
    meow - выводит в консоль строку "ИМЯ_КОШКИ: meow"
    up - меняет состояние кошки на 'standing'
    down - меняет состояние кошки на 'lying'

    Например:
    const cat = new Cat('murzik');
    console.log(cat.name); // 'murzik'
    console.log(cat.state); // 'lying'
    cat.up();
    console.log(cat.state); // 'standing'
    cat.down();
    console.log(cat.state); // 'lying'
    cat.meow(); // выводит в консоль "murzik: meow"
 */

class Cat {
   constructor(name) {
      this.name = name;
      this.state = 'run';
   }

   meow() {
      console.log(`${this.name}: meow`);
   }

   up() {
      this.state = 'standing';
   }
  
   down() {
      this.state = 'lying';
   }
}

let cat = new Cat('Murzik');
console.log(cat.name); 
console.log(cat.state); 
cat.up();
console.log(cat.state); 
cat.down();
console.log(cat.state); 
cat.meow(); 

 /*
    2)

    Создайте два класса Animal и Dog
    У всех экземпляров класса Animal есть собственные (не наследуемые) свойства: { movingType, color }
    Например: const someAnimal = new Animal('walking', 'black'); // { movingType: 'walking', color: 'black' };
    А у экземпляров класса Dog есть собственные свойства: { name, age, weight }
    Например: const someDog = new Dog('tuzik', 4, 10); // { name: 'tuzik', age: 4, weight: 10 };
    Реализуйте наследование класса Animal классом Dog,
    так чтобы все экземпляры класса Dog имели свойства { movingType, color, name, age, weight };
    Например: const someDog = new Dog('walking', 'black', 'tuzik', 4, 10); // { movingType: 'walking', color: 'black', name: 'tuzik', age: 4, weight: 10 };
 */

class Animal {
   constructor(movingType, color) {
      this.movingType = movingType;
      this.color = color;
   }
}

class Dog extends Animal {
   constructor(name, age, weight, movingType, color) {
      super(movingType, color);
      this.name = name;
      this.age = age;
      this.weight = weight;
   }
}

 const someAnimal = new Animal('walking', 'black');
 const someDog = new Dog('tuzik', 4, 10, 'walking', 'black');
 console.log(someAnimal);
 console.log(someDog);

 /*
    3)

    Создайте два класса Transport и Car
    Эклемпляры класса Transport имеют свойтсво status и методы run и stop,
    которые меняют свойсто status на 'running' и 'stopped' соответсвтенно.
    Унаследуйте эти методы и свойство классом Car
    
    Например:
    const someTransport = new Transport();
    console.log(someTransport.status); // 'stopped'
    console.log(someTransport.run()); // 'running'
    console.log(someTransport.stop()); // 'stopped'
    const someCar = new Car();
    console.log(someCar.status); // 'stopped'
    console.log(someCar.run()); // 'running'
    console.log(someCar.stop()); // 'stopped'
 */

class Transport {
   constructor() {
      this.status = 'stopped';
   }
   
   run() {
      this.status = 'running';
   }
   stop() {
      this.status = 'stopped';
   }
}

class Car extends Transport {

}

const someTransport = new Transport();
console.log(someTransport.status); 
someTransport.run();
console.log(someTransport.status);
someTransport.stop();
console.log(someTransport.status);

const someCar = new Car();
console.log(someCar.status); 
someCar.run();
console.log(someCar.status);
someCar.stop();
console.log(someCar.status);

/*
   4)

   — Опишите класс Human:  для создания объектов со свойствами name,
   age и height конструктор класса должен принимать одноимённые аргументы.

   — Создайте массив humans из десяти объектов на основе класса Human:
   'Коля', 23, 180,
   'Даша', 19, 170,
   'Ваня', 18, 192,
   'Петя', 45, 178,
   'Вася', 34, 197,
   'Джони', 40, 168,
   'Катя', 37, 160,
   'Петя', 29, 200,
   'Соня', 21, 172,
   'Женя', 25, 175

   — Укажите классу метод getInfo (он должен возвращать строки вида 'Коля, 23, 180'),
   — Укажите метод геттер firstname ( он должен возвращать свойство name объекта)
   — Укажите метод сеттер firstname ( он должен настраивать свойство name объекта)

   — Напишите функции сортировки sortByName и sortByHeight,
     которые смогут отсортировать массив по именам (в алфавитном порядке)
     или росту (по убыванию роста). Вызовите только функцию сортировки по росту.
*/
<<<<<<< HEAD
=======

class Human {
   constructor(name, age, height) {
      this.name = name;
      this.age = age;
      this.height = height;
   }

   getInfo() {
      console.log(`${this.name}, ${this.age}, ${this.height}`);
   }

   get firstname() {
      return this.name;
   }

   set firstname(name) {
      this.name = name;
   }
}

function sortByName(arr) {
   arr.sort((a, b) => {
      if (a.name > b.name) return 1; 
      if (a.name == b.name) return 0; 
      if (a.name < b.name) return -1;
   });
   return arr;
}

function sortByHeight(arr) {
   arr.sort((a, b) => {
      return b.height - a.height;
   });
   return arr;
}

humans = [
   ['Коля', 23, 180],
   ['Даша', 19, 170],
   ['Ваня', 18, 192],
   ['Петя', 45, 178],
   ['Вася', 34, 197],
   ['Джони', 40, 168],
   ['Катя', 37, 160],
   ['Петя', 29, 200],
   ['Соня', 21, 172],
   ['Женя', 25, 175]
];

humans = humans.map(item => new Human(...item));

//console.log(sortByName(humans));
console.log(sortByHeight(humans));
>>>>>>> KiryanovaIrina/lesson7
