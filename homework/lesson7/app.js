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

      // class Cat {
      //    constructor(name) {
      //       this.name = name;
      //       this.state = 'lying';
      //    }
      //    meow () {
      //       console.log(`${this.name}: meow`);
      //    }
      //    up () {
      //       this.state = 'standing';  
      //    }
      //    down () {
      //       this.state = 'lying';
      //    }
      // }
      // const cat = new Cat('Murzik');
   
      // console.log(cat.name); // 'Murzik'
      // console.log(cat.state); // 'lying'
      // cat.up();
      // console.log(cat.state); // 'standing'
      // cat.down();
      // console.log(cat.state); // 'lying'
      // cat.meow(); // выводит в консоль "Murzik: meow"

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

      // class Animal {

      //    constructor(movingType, color) {
      //       this.movingType = movingType;
      //       this.color = color;
      //    }    
      // }
      // const someAnimal = new Animal('walking', 'black')

      // class Dog extends Animal {

      //    constructor(movingType, color, name, age, weight) {
      //       super(movingType, color);

      //       this.name = name;
      //       this.age = age;
      //       this.weight = weight;
      //    }
      // }

      // const someDog = new Dog ('walking', 'black', 'tuzik', 4, 10);

      // console.log(someAnimal);  // movingType: "walking", color: "black"
      // console.log(someDog);     // movingType: "walking", color: "black", name: "tuzik", age: 4, weight: 10

 /*
    3)

    Создайте два класса Transport и Car
    Эклемпляры класса Transport имеют свойтсво status и методы run и stop,
    которые меняют свойсто status на 'running' и 'stopped' соответсвтенно.
    Унаследуйте эти методы и свойство классом Car
    
    Например:
    const someTransport = new Transport();
    console.log(someTransport.status); // 'stopped'
    console.log(someTransport.run()); // 'running' // undefined сначала вызвать метод
    console.log(someTransport.stop()); // 'stopped' // undefined ...
    const someCar = new Car();
    console.log(someCar.status); // 'stopped'
    console.log(someCar.run()); // 'running' // undefined ...
    console.log(someCar.stop()); // 'stopped' // undefined ...
 */

//        Решение 1.

      // class Transport {
        
      //    constructor(status) {
      //       this.status = status; 
      //    } 
      //    run () {
      //       this.status = 'running'; 
      //    } 
      //    stop () {
      //       this.status = 'stopped';
      //    } 
      // }
      // const someTransport = new Transport('stopped');

      // class Car extends Transport {
      //    constructor(status) {
      //       super(status);
      //    }
      // }

      // console.log(someTransport.status); // 'stopped'
      // someTransport.run();
      // console.log(someTransport.status); // 'running'  
      // someTransport.stop();
      // console.log(someTransport.status); // 'stopped'

      // const someCar = new Car();

      // someCar.stop();
      // console.log(someCar.status); // 'stopped'
      // someCar.run();
      // console.log(someCar.status); // 'running'
      // someCar.stop();
      // console.log(someCar.status); // 'stopped'

//        Решение 2.

      // class Transport {
        
      //    constructor () {
      //       this.status = 'stopped'; 
      //    } 
      //    run () {
      //       this.status = 'running'; 
      //    } 
      //    stop () {
      //       this.status = 'stopped';
      //    } 
      // }
      // const someTransport = new Transport();

      // class Car extends Transport {
      //    constructor(status) {
      //       super(status);
      //    }
      // }

      // console.log(someTransport.status); // 'stopped'
      // someTransport.run();
      // console.log(someTransport.status); // 'running'  
      // someTransport.stop();
      // console.log(someTransport.status); // 'stopped'

      // const someCar = new Car();

      // console.log(someCar.status); // 'stopped'
      // someCar.run();
      // console.log(someCar.status); // 'running'
      // someCar.stop();
      // console.log(someCar.status); // 'stopped'   
      
//        Решение 3.

      // class Transport {
      //    status='stopped'; 
         
      //    run () {
      //    return this.status = 'running'; 
      //    } 
      //    stop () {
      //    return this.status = 'stopped';
      //    } 
      // }
      // const someTransport = new Transport();

      // class Car extends Transport {
      //    constructor(status) {
      //       super (status);
      //    }
      // }

      // console.log(someTransport.status); // 'stopped'
      // someTransport.run();
      // console.log(someTransport.status); // 'running'  
      // someTransport.stop();
      // console.log(someTransport.status); // 'stopped'

      // const someCar = new Car();

      // console.log(someCar.status); // 'stopped'
      // someCar.run();
      // console.log(someCar.status); // 'running'
      // someCar.stop();
      // console.log(someCar.status); // 'stopped'   


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

// //         Решение 1.

//       class Human {
//          constructor(name, age, height) {
//             this.name = name; 
//             this.age = age;
//             this.height = height;
//          }
//          getInfo () {
//             console.log(this.name + ', ' + this.age + ', ' + this.height);
//          }
//          get firstname () {
//             console.log('name: ' + this.name);
//             return this.name;
//          }
//          set firstname (name) {
//             this.name = name;
//          }
//       }
//       function sortByName(title) {
//          return title.sort(             // стрелочная функция return title.sort((num,num1) => { } ) 
//             function (num,num1) {
//              if ( num.name > num1.name ) {
//                return 1;
//              } else if (num1.name > num.name) {
//                return -1;
//              } return 0;
//          });
//        }
//       function sortByHeight (title) {
//          return title.sort(             // стрелочная функция return title.sort((a, b) => { } ) 
//            function(a, b) {
//            return b.height - a.height;
//          });
//       }
//       let humans = [
//          new Human ("Коля", 23, 180),
//          new Human ("Даша", 19, 170),
//          new Human ("Ваня", 18, 192),
//          new Human ("Петя", 45, 178),
//          new Human ("Вася", 34, 197),
//          new Human ("Джони", 40, 168),
//          new Human ("Катя", 37, 160),
//          new Human ("Петя", 29, 200),
//          new Human ("Соня", 21, 172),
//          new Human ("Женя", 25, 175),
//       ];

// //    console.log(humans); 
// //    console.log(sortByName(humans));
//       console.log(sortByHeight(humans));


// //         Решение 2.

//       class Human {
//          constructor(name, age, height) {
//             this.name = name; 
//             this.age = age;
//             this.height = height;
//          }
//          getInfo () {
//             console.log(this.name + ', ' + this.age + ', ' + this.height);
//          }
//          get firstname () {
//             console.log('name: ' + this.name);
//             return this.name;
//          }
//          set firstname (name) {
//             this.name = name;
//          }
//          static sortByName (num,num1) {
//             if ( num.name > num1.name ) {
//                return 1;
//             }
//             else if (num1.name > num.name) {
//                return -1;
//             }
//             return 0;
//          }
//          static sortByHeight (a, b) {
//             return b.height - a.height;
//          }
//       }
//       let humans = [
//          new Human ("Коля", 23, 180),
//          new Human ("Даша", 19, 170),
//          new Human ("Ваня", 18, 192),
//          new Human ("Петя", 45, 178),
//          new Human ("Вася", 34, 197),
//          new Human ("Джони", 40, 168),
//          new Human ("Катя", 37, 160),
//          new Human ("Петя", 29, 200),
//          new Human ("Соня", 21, 172),
//          new Human ("Женя", 25, 175),
//       ];

// //    console.log(humans); 

// //    let arrByName = Human.sortByName;
// //    console.log(humans.sort(arrByName));

//       let arrByHeight = Human.sortByHeight;
//       console.log(humans.sort(arrByHeight)); 





    
