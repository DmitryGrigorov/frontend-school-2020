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
/* -------
   1)Ответ:

   class Cat {
   constructor(name, state) {
      this.name = name;
      this.state = "lying";
   }

   meow() {
      console.log(this.name + ": meow");
   }
   up() {
      this.state = "standing";
   }
   down() {
      this.state = "lying";
   }
   }

   const cat = new Cat("murzik");
   console.log(cat.name);
   console.log(cat.state);
   cat.up();
   console.log(cat.state);
   cat.down();
   console.log(cat.state);
   cat.meow();
   */

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
/* --------
    2)Ответ:

   class Animal {
   constructor(movingType, color) {
      this.movingType = movingType;
      this.color = color;
   }
   }
   class Dog extends Animal {
   constructor(name, age, weight, ...args) {
      super(...args);
      this.name = name;
      this.age = age;
      this.weight = weight;
   }
   }

   const someDog = new Dog("tuzik", 4, 10, "walking", "black");
   console.log(someDog);

   */

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

/*------
   3)Ответ:

   class Transport {
      constructor(status) {
         this.status = 'stopped';
      };

      run () {
         this.status = 'running';
      };
      stop () {
         this.status = 'stopped'
      };

   };
   class Car extends Transport {
      constructor(...args) {
         super(...args);
      };
   };
   console.log('\n');

   const someTransport = new Transport();
   console.log(someTransport.status);
   someTransport.run();
   console.log(someTransport.status);
   someTransport.stop();
   console.log(someTransport.status);
   console.log('\n');
   const someCar = new Car();
   console.log(someCar.status);
   someCar.run();
   console.log(someCar.status);
   someCar.stop();
   console.log(someCar.status);
   console.log(someCar);

   */

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

/*--------
   4) Ответ:

   class Human {
      constructor (name, age, height) {
         this.name = name;
         this.age = age;
         this.height = height;
      };
      getInfo () {
         console.log(`${this.name},${this.age},${this.height}`);
      };

      get firstname () {
         console.log( 'name: ' + this.name);
         return this.name;
      };
      set firstname (newName) {
            this.name = newName;
      };

   };

 let massHuman = [];
         massHuman[0] = new Human ("Коля", 23, 180);
         massHuman[1] = new Human ("Даша", 19, 170);
         massHuman[2] = new Human ("Ваня", 18, 192);
         massHuman[3] = new Human ("Петя", 45, 178);
         massHuman[4] = new Human ("Вася", 34, 197);
         massHuman[5] = new Human ("Джони", 40, 168);
         massHuman[6] = new Human ("Катя", 37, 160);
         massHuman[7] = new Human ("Петя", 29, 200);
         massHuman[8] = new Human ("Соня", 21, 172);
         massHuman[9] = new Human ("Женя", 25, 175);

 const someHuman = new Human("Дима",26,178);
 someHuman.getInfo();

 
function sortByName (massHuman) {
   for (let i = 0; i < massHuman.length -1; i++) {
      for (let j = i; j < massHuman.length; j++) {
         if( massHuman[i].name > massHuman[j].name) {
         let k = massHuman[i];
         massHuman[i] = massHuman[j];
         massHuman[j] = k;
         }
      }
   }
      return massHuman;
};

function sortByHeight (massHuman) {
   for (let i = 0; i < massHuman.length -1; i++) {
      for (let j = i; j < massHuman.length; j++) {
         if( massHuman[i].height < massHuman[j].height) {
         let k = massHuman[i];
         massHuman[i] = massHuman[j];
         massHuman[j] = k;
         }
      }
   }
      return massHuman;
};


console.log(sortByHeight(massHuman));
*/
