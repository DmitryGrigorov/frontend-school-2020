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

let animal = {
    up: function() {
        this.state = 'standing';
    },

    down: function() {
        this.state = 'lying';
    },

    meow: function() {
        console.log(`${this.name}: meow`);
    }
}

let sew = new Cat('murzik', 'lying');

sew.__proto__ = animal;


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
    'hello': 'привет',
    'good morning': 'доброе утро',

    get noWord() {
        for(this.key in this.obj) {
            if(this.key in this.obj) return this[key];
        }
    }
}
debugger
console.log(dictionary['hello']);
console.log(dictionary['good morning']);
console.log(dictionary['toString']);

// 3
// Напишите полифил для метода массива forEach

function polifil(func) {
    for (let i = 0; this.length > i; i++) {
        func(this[i]);
    }
};

Array.prototype.polifil = polifil;

let items = ['item1', 'item2', 'item3'];
let copy = [];

items.polifil((item) => {
  copy.push(item)
});



// 4
// Напишите полифил для метода массива join
function joinPolifil(separator) {
    debugger
    let copyArr = [];
    let str = '';
    copyArr = this.slice();
    for (let i = 0; copyArr.length > i;) {
        if(separator === undefined) {
        str += `${copyArr.shift()},`
        } else str += `${copyArr.shift()}${separator}`
    } 
    str = str.slice(0, (str.length - 1));
    return str;
};

Array.prototype.joinPolifil = joinPolifil;

let items = ['item1', 'item2', 'item3'];
let string = '';

items.joinPolifil();

// 5 (наследование свойст без прототипов)
// Создайте два конструктора Animal и Dog
// У всех экземпляров класса Animal есть собственные (не наследуемые) свойства: { movingType, color }
// Например: const someAnimal = new Animal('walking', 'black'); // { movingType: 'walking', color: 'black' };
// А у экземпляров класса Dog есть собственные свойства: { name, age, weight }
// Например: const someDog = new Dog('tuzik', 4, 10); // { name: 'tuzik', age: 4, weight: 10 };
// Реализуйте наследование класса Animal классом Dog,
// так чтобы все экземпляры класса Dog имели свойства { movingType, color, name, age, weight };
// Например: const someDog = new Dog('walking', 'black', 'tuzik', 4, 10); // { movingType: 'walking', color: 'black', name: 'tuzik', age: 4, weight: 10 };

const Animal = function(movingType, color) {
    this.movingType = movingType;
    this.color = color;
}

const Dog = function(name, age, weight, ...args) {
    Animal.apply(this, args);
    this.name = name;
    this.age = age;
    this.weight = weight;
}

let someAnimal = new Animal('walking', 'black');

let someDog = new Dog('tuzik', 4, 10, 'walking', 'black');

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


const Transport = function() {
    this.status = `stopped`;
    this.run = function() {
        this.status = `running`;
    };
    this.stop = function () {
        this.status = `stopped`;
    };
}
const Car = function() {};

Car.prototype = new Transport();
Car.prototype.constructor = Car;

let someTransport = new Transport();

let someCar = new Car();
