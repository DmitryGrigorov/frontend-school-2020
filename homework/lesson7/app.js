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

 class Cat{
    constructor(options){
       this.name = options.name;
       this.state = 'lying';
    }
 }
 let cat =new Cat({
    name: 'murzik'
 });
 console.log(cat);
 Cat.prototype.meow = function(){
    console.log(this.name + ': meow')
}
Cat.prototype.up = function(){
    this.state = 'standing';
}
Cat.prototype.down = function(){
    this.state = 'lying';
}
cat.up();
console.log(cat);
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
class Animal{
   constructor(movingType, color){
      this.movingType = movingType;
      this.color = color;
   }
}
class Dog extends Animal{
   constructor(movingType, color, name, age, weight){
      super(movingType, color);
      this.name = name;
      this.age = age;
      this.weight = weight;  
   }

}
const someAnimal = new Animal('walking', 'black');
console.log(someAnimal);
const someDog = new Dog('walking', 'black', 'tuzik', 4, 10); 
console.log(someDog);
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

class Transport{
    constructor(){
      this.status = 'stopped';
    }
    run(){
      this.status = 'running';
    }
    stop(){
      this.status = 'stopped';
    }
 }
 class Car extends Transport{

}
const someTransport = new Transport();
console.log(someTransport.status); // 'stopped'
someTransport.run(); // 'running'
console.log(someTransport.status); 
someTransport.stop(); // 'stopped'
console.log(someTransport.status); 
const someCar = new Car();
console.log(someCar.status); // 'stopped'
someCar.run(); // 'running'
console.log(someCar.status);
someCar.stop(); // 'stopped'
console.log(someCar.status);


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
class Human{
   constructor(name, age, height){
      this.name = name;
      this.age = age;
      this.height = height;  
   }
   getInfo(){
      return `$(this.name), $(this.age), $(this.height)`;
   }
   get firstname(){ 
      return this.name;
   }
   set firstname(value){
      this.name = value;
   }
   
   static sortByName(human1, human2){
      let first = human1.name.toLowerCase();
      let second = human2.name.toLowerCase();

      let result = first < second ? -1 : (first > second ? 1 : 0);
      return result;
    
   }

   static sortByHeight(human1, human2){ 
      return  human2.height - human1.height ;
   }
 
}

let people = [
   new Human("Коля",  23, 180),
   new Human("Даша",  19, 170),
   new Human("Ваня",  18, 192),
   new Human("Петя",  45, 178),
   new Human("Вася",  34, 197),
   new Human("Джони", 40, 168),
   new Human("Катя",  37, 160),
   new Human("Петя",  29, 200),
   new Human("Соня",  21, 172),
   new Human("Женя",  25, 175)   
 ];
 console.log(people);
 console.log('sort by height');
 console.log(people.sort(Human.sortByHeight));
 console.log('sort by name');
 console.log(people.sort(Human.sortByName));
 let someHuman=new Human();
 someHuman.firstname = 'Vasya';
 console.log(someHuman.firstname);
 

