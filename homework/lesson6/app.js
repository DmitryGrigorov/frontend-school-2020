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

/*
//       Решение.

      const cat = new Cat('Murzik');
      function Cat(name) {
         this.name = name;
         this.state = 'jumping';
      }
      Cat.prototype.meow = function() {
      console.log(`${this.name}: meow`);
      }
      Cat.prototype.up = function() {
         this.state = 'standing';
      }
      Cat.prototype.down = function() {
         this.state = 'lying';
      }

      console.log(cat.name);       // Murzik
      console.log(cat.state);      // jumping
      cat.up();                      
      console.log(cat.state);      // standing
      cat.down();
      console.log(cat.state);      // lying
      cat.meow();                  // Murzik: meow
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

/*
//       Решение.

      let dictionary = Object.create(null);
         dictionary['hello'] = 'привет';
         dictionary['good morning'] = 'доброе утро';

      console.log(dictionary['hello']);          // 'привет'
      console.log(dictionary['good morning']);   // 'доброе утро'
      console.log(dictionary['toString']);       //  undefined
*/

    
// 3
// Напишите полифил для метода массива forEach

/*
//       Решение.

      const arr = ['be', 'cry', 'finish', 'crouch'];           // new Array();
      arr.forEach(function(item, index, arr) {
      console.log(index + ": " + item + "ing ( Infinitive: " + arr + " )");
      });
      Array.prototype.join = undefined;
*/


// 4
// Напишите полифил для метода массива join

/*
      const arr = ['a', 'b', 'c'];                  // new Array();
      console.log(arr.join('-'));
      Array.prototype.join = undefined;
*/


// 5 (наследование свойст без прототипов)
//
// Создайте два конструктора Animal и Dog
//
// У всех экземпляров класса Animal есть собственные (не наследуемые) свойства: { movingType, color }
//
// Например: const someAnimal = new Animal('walking', 'black'); 
//    { movingType: 'walking',
//      color: 'black' 
//   };
//
// А у экземпляров класса Dog есть собственные свойства: { name, age, weight }
//
// Например: const someDog = new Dog('tuzik', 4, 10); 
//    { name: 'tuzik',
//      age: 4, 
//      weight: 10 
//    };
//
// Реализуйте наследование класса Animal классом Dog,
// так чтобы все экземпляры класса Dog имели свойства { movingType, color, name, age, weight };
//
// Например: const someDog = new Dog('walking', 'black', 'tuzik', 4, 10); 
// { movingType: 'walking',
//   color: 'black', 
//   name: 'tuzik',
//   age: 4, 
//   weight: 10 
// };

/*
//         Решение.

      function Animal (movingType, color) {
         this.movingType = movingType,
         this.color = color
      }
      const someAnimal = new Animal('walking', 'black');

      function Dog (movingType, color, name, age, weight) {
         Animal.call(this, movingType, color);
            this.name = name,
            this.age = age,
            this.weight = weight
      }
      const someDog = new Dog ('walking', 'black','tuzik', 4, 10);

      console.log(someAnimal);  // movingType: "walking", color: "black"
      console.log(someDog);     // movingType: "walking", color: "black", name: "tuzik", age: 4, weight: 10
*/


// 6 (наследование через прототипы)
//
// Создайте два конструктора Transport и Car
//
// Эклемпляры конструктора Transport имеют свойтсво status и методы run и stop,
// которые меняют свойсто status на 'running' и 'stopped' соответсвтенно.
//
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
//         Решение 1.

      function Transport (status) {
         this.status = status;
      }
      Transport.prototype.run = function() {
         this.status = 'running';
      }
      Transport.prototype.stop = function() {
         this.status = 'stopped';
      }

      const someTransport = new Transport();

      function Car (...args) {
         Transport.apply (this, args); 
      }

      const prototypeConnector = Object.create(Transport.prototype);

      Car.prototype = prototypeConnector;
      Car.prototype.constructor = Car;

      someTransport.stop();
      console.log(someTransport.status); // 'stopped'
      someTransport.run();
      console.log(someTransport.status); // 'running'
//    console.log(someTransport.run()); // undefined   
      someTransport.stop();
      console.log(someTransport.status); // 'stopped'
//    console.log(someTransport.stop()); // undefined   
      
      const someCar = new Car();
      
      someCar.stop();
      console.log(someCar.status); // 'stopped'
      someCar.run();
      console.log(someCar.status); // 'running'
//    console.log(someCar.run());  // undefined
      someCar.stop();
      console.log(someCar.status); // 'stopped'
//    console.log(someCar.stop()); //undefined
*/

/*
//         Решение 2.

      function Transport () {
        this.status = 'stopped';
      }
      Transport.prototype.run = function() {
         this.status = 'running';
      }
      Transport.prototype.stop = function() {
         this.status = 'stopped';
      }

      const someTransport = new Transport();

      function Car () {
        Transport.apply (this); 
      }

      const prototypeConnector = Object.create(Transport.prototype);

      Car.prototype = prototypeConnector;
      Car.prototype.constructor = Car;

      console.log(someTransport.status); // 'stopped'
      someTransport.run();
      console.log(someTransport.status); // 'running'  
      someTransport.stop();
      console.log(someTransport.status); // 'stopped'

      const someCar = new Car();
   
      console.log(someCar.status); // 'stopped'
      someCar.run();
      console.log(someCar.status); // 'running'
      someCar.stop();
      console.log(someCar.status); // 'stopped'
*/
