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
   constructor(name,state = "lying") {
      this.name = name;
      this.state = state;
   };

   up () {
      this.state = "standing";
   };
   down () {
      this.state = "lying";
   };
   meow () {
      console.log(this.name + ": meow");
   };
 };
 const cat = new Cat('murzik');
 console.log(cat.name); // 'murzik'
 console.log(cat.state); // 'lying'
 cat.up();
 console.log(cat.state); // 'standing'
 cat.down();
 console.log(cat.state); // 'lying'
 cat.meow(); // выводит в консоль "murzik: meow"
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
   constructor(options) {
      this.movingType = options.movingType;
      this.color = options.color;
   }
};
const someAnimal = new Animal({movingType: 'walking', color: 'black'});
console.log(someAnimal);

class Dog {
   constructor(options) {
      this.name = options.name;
      this.age = options.age;
      this.weight = options.weight;
   }
};
const someDog1 = new Dog({ name: 'tuzik', age: 4, weight: 10 });
console.log(someDog1);


class UpgratedDog extends Animal{
   constructor(options) {
      super(options);
      this.name = options.name;
      this.age = options.age;
      this.weight = options.weight;
   }
};
const someDog2 = new UpgratedDog ({ movingType: 'walking', color: 'black', name: 'tuzik', age: 4, weight: 10 });
console.log(someDog2);


 /*
    3)

    Создайте два конструктора Transport и Car
    Эклемпляры конструктора Transport имеют свойтсво status и методы run и stop,
    которые меняют свойсто status на 'running' и 'stopped' соответсвтенно.
    Унаследуйте эти методы и свойство конструктором Car
    
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
   constructor(status = 'stopped') {
      this.status = status;
   }
   run() {
      return this.status = "running";
   }
   stop() {
      return this.status = "stopped";
   }
};

class Car extends Transport {
   constructor(status) {
      super(status);
   };
   run() {
      return super.run();
   };
   stop() {
      return super.stop();
   };
};

const someTransport = new Transport();
console.log(someTransport.status); // 'stopped'
console.log(someTransport.run()); // 'running'
console.log(someTransport.stop()); // 'stopped'
const someCar = new Car();
console.log(someCar.status); // 'stopped'
console.log(someCar.run()); // 'running'
console.log(someCar.stop()); // 'stopped'


/*
   4)

   — Опишите класс Human:  для создания объектов со свойствами name,
   age и height конструктор класса должен принимать одноимённые аргументы.

   — Создайте массив humans из десяти объектов на основе класса Human:
   «Коля», 23, 180,
   «Даша», 19, 170,
   «Ваня», 18, 192,
   «Петя», 45, 178,
   «Вася», 34, 197,
   «Джони», 40, 168,
   «Катя», 37, 160,
   «Петя», 29, 200,
   «Соня», 21, 172,
   «Женя», 25, 175

   — Укажите классу метод getInfo (он должен возвращать строки вида «Коля, 23, 180»),
   — Укажите метод геттер firstname ( он должен возвращать свойство name объекта)
   — Укажите метод сеттер firstname ( он должен настраивать свойство name объекта)

   — Напишите функции сортировки sortByName и sortByHeight,
     которые смогут отсортировать массив по именам (в алфавитном порядке)
     или росту (по убыванию роста). Вызовите только функцию сортировки по росту.
*/

class Human {
   constructor(name, age, height) {
      this.name = name;
      this.age = age;
      this.height = height;
   }
   getInfo() {
      return [this.name, this.age, this.height].join(', ');
   }
   set firstName (newValue) {
      return this.name = newValue;
   }
   get firstName () {
      return `${this.name}`;
   }
   sortByName() {

   }
};
let persons = [];
let person1 = new Human ('Коля', 23, 180);
console.log(person1.getInfo());
console.log(person1.firstName);
person1.firstName = "Петя";
console.log(person1.firstName);

persons.push(person1);
persons.push(new Human ('Ваня', 18, 192));
persons.push(new Human ('Даша', 19, 170));
persons.push(new Human ('Петя', 45, 178));
persons.push(new Human ('Вася', 34, 197));
persons.push(new Human ('Джони', 40, 168));
persons.push(new Human ('Катя', 37, 160));
persons.push(new Human ('Петя', 29, 200));
persons.push(new Human ('Соня', 21, 172));
persons.push(new Human ('Женя', 25, 175));

console.log(persons);

function sortByName (array) {
   array.sort(function sortfunction(a, b){
      let name1 = a.name.toLowerCase();
      let name2 = b.name.toLowerCase();
      if (name1 > name2) { 
         return 1; }
      if (name1 < name2) { 
         return -1; }
      return 0
   })
};
console.log(persons);

function sortByHeight (array) {
   array.sort(function sortfunction(a, b){
      return b.height - a.height;
   })
};
sortByHeight(persons);
console.log(persons);
