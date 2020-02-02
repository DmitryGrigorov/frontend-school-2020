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

function Cat(name) {
    this.name = name;
    this.state = 'lying';

    Cat.prototype.meow = () => console.log(`${this.name}: meow`);

    Cat.prototype.up = () => this.state = 'standing';

    Cat.prototype.down = () => this.state = 'lying';
}

console.log(`#1)`)
const cat = new Cat('murzik');
console.log(`cat.name: ${cat.name}`); // 'murzik'
console.log(`cat.state: ${cat.state}`); // 'lying'
cat.up();
console.log(`cat.up -> cat.state: ${cat.state}`); // 'standing'
cat.down();
console.log(`cat.down -> cat.state: ${cat.state}`); // 'lying'
cat.meow(); // выводит в консоль "murzik: meow"


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

let dictionary = {};
dictionary.__proto__ = null;
dictionary['hello'] = 'привет';
dictionary['good morning'] = 'доброе утро';

console.log(`\n#2) dictionary['hello']: ${dictionary['hello']}`);
console.log(`dictionary['good morning']: ${dictionary['good morning']}`);
console.log(`dictionary['toString']: ${dictionary['toString']}`);


// 3
// Напишите полифил для метода массива forEach

(function () {
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (element) {
            for (let i = 0; i < this.length; i++) {
                return this[i];
            }
        }
    }
})();
let arr = [1, 2, 3, 4, 5];

console.log(`\n#3) arr: ${arr}`);
arr.forEach((x) => console.log(`x: ${x}`));


// 4
// Напишите полифил для метода массива join

(function () {
    if (!Array.prototype.join) {
        Array.prototype.join = function (separator) {
            let result = this[0];
            for (let i = 1; i < this.length; i++)
                result += separator + this[i];
            separator(result);
        }
    }
})();
arr = [1, 2, 3, 4, 5];

console.log(`\n#4) arr: ${arr}`);
console.log(`arr.join('&'): ${arr.join('&')}`);


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

function Dog(name, age, weight, ...args) {
    Animal.apply(this, args);
    this.name = name;
    this.age = age;
    this.weight = weight;
}

const someDog = new Dog('walking', 'black', 'tuzik', 4, 10);

console.log(`\n#5) someDog:`);
console.log(someDog);


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

function Transport(status) {
    Transport.prototype.status = 'stopped';
    Transport.prototype.run = () => this.status = 'running';
    Transport.prototype.stop = () => this.status = 'stopped';
}

function Car() {

}

Car.prototype = Object.create(Transport.prototype);
Car.prototype.constructor = Transport;
const someTransport = new Transport();

console.log(`\n#6) :`);
console.log(`someTransport.status: ${someTransport.status}`); // 'stopped'
console.log(`someTransport.run(): ${someTransport.run()}`); // 'running'
console.log(`someTransport.stop(): ${someTransport.stop()}`); // 'stopped'
const someCar = new Car();
console.log(`someCar.status: ${someCar.status}`); // 'stopped'
console.log(`someCar.run(): ${someCar.run()}`); // 'running'
console.log(`someCar.stop(): ${someCar.stop()}`); // 'stopped'