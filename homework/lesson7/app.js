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
        this.state = 'lying';
    }

    meow() {
        console.log(this.name + ': meow');
    }

    up() {
        this.state = 'standing';
    }

    down() {
        this.state = 'lying';
    }
}

// const cat = new Cat('murzik');
// console.log(cat.name); // 'murzik'
// console.log(cat.state); // 'lying'
// cat.up();
// console.log(cat.state); // 'standing'
// cat.down();
// console.log(cat.state); // 'lying'
// cat.meow(); // выводит в консоль "murzik: meow"
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
    constructor(details) {
        this.movingType = details.movingType;
        this.color = details.color;

    }
}

class Dog extends Animal {
    constructor(details) {
        super(details);
        this.name = details.name;
        this.age = details.age;
        this.weight = details.weight;
    }
}

// const someAnimal = new Animal({movingType: 'walking', color: 'black'}); // { movingType: 'walking', color: 'black' };
// console.log(someAnimal);
// const someDog = new Dog({ name: 'tuzik', age: 4, weight: 10 }); // { name: 'tuzik', age: 4, weight: 10 };
// console.log(someDog);
// const someDog2 = new Dog({ movingType: 'walking', color: 'black', name: 'tuzik', age: 4, weight: 10 });
// console.log(someDog2)
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
        return this.status;
    }

    stop() {
        this.status = 'stopped';
        return this.status;
    }
}

class Car extends Transport {
    constructor() {
        super();

    }
}

// const someTransport = new Transport();
// console.log(someTransport.status); // 'stopped'
// console.log(someTransport.run()); // 'running'
// console.log(someTransport.stop()); // 'stopped'
// const someCar = new Car();
// console.log(someCar.status); // 'stopped'
// console.log(someCar.run()); // 'running'
// console.log(someCar.stop()); // 'stopped'
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
        this.height=height;
    }

    getInfo() {
        console.log(this.name + ' ' + this.age + ' ' + this.height);
    }
    get firstname(){
        return this.name;
    }
    set firstname(name){
        this.name=name;
    }
}
let humans=[];
const Kolya = new Human('Коля', 23, 180,);
const Dasha=new Human('Даша', 19, 170,);
const Vanya=new Human('Ваня', 18, 192,);
const Petya=new Human('Петя', 45, 178,);
const Vasya = new Human('Вася', 34, 197,);
const Johny= new Human('Джони', 40, 168,);
const Kate=new Human('Катя»', 37, 160,);
const Petyav2=new Human('Петя', 29, 200,);
const Sonya=new Human('Соня', 21, 172,);
const Zhenya=new Human('Женя', 25, 175);
humans.push(Kolya,Dasha,Vanya,Petya,Vasya,Johny,Kate,Petyav2,Sonya,Zhenya);
function sortByName(arr) {
  return  arr.sort(function (a,b) {
        if (a.name<b.name){
            return -1;
        }
        if (a.name>b.name){
            return 1;
        }
        if (a.name===b.name){
            return 0;
        }

    });

};
function sortByHeight(arr){
   return arr.sort((a,b) => b.height-a.height);
}

console.log(sortByHeight(humans));





