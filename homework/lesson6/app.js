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
    this.state = 'standing';
    Cat.prototype.up = function () {
        this.state = 'standing';
    };
    Cat.prototype.down = function () {
        this.state = 'lying';
    };
    Cat.prototype.meow = function () {
        console.log(`${this.name}: meow`);
    };
}

console.log("1)");
const cat = new Cat('murzik');
console.log(cat);
cat.up();
console.log(`cat.state = ${cat.state}`); // 'standing'
cat.down();
console.log(`cat.state = ${cat.state}`); // 'lying'
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

console.log("2)");
let dictionary = {};
dictionary.__proto__ = null;

dictionary['hello'] = 'привет';
dictionary['good morning'] = 'доброе утро';
console.log(dictionary['hello']); // 'привет'
console.log(dictionary['good morning']); // 'доброе утро'
console.log(dictionary['toString']); // undefined

// 3
// Напишите полифил для метода массива forEach

(function () {
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (func) {
            for (let a = 0; a < this.length; a++) {
                func(this[a]);
            }
        }
    }
})();
console.log("3)");
let testArray = [1, 2, 3];
console.log(testArray);
testArray.forEach((x) => console.log(x));

// 4
// Напишите полифил для метода массива join

(function () {
    if (!Array.prototype.join) {
        Array.prototype.join = function (sep) {
            let result = this[0];
            for (let a = 1; a < this.length; a++)
                result += sep + this[a];
            return result;
        }
    }
})();
console.log("4)");
testArray = [1, 2, 3];
console.log(testArray);
console.log(testArray.join('-'));

// 5 (наследование свойст без прототипов)
// Создайте два конструктора Animal и Dog
// У всех экземпляров класса Animal есть собственные (не наследуемые) свойства: { movingType, color }
// Например: const someAnimal = new Animal('walking', 'black'); // { movingType: 'walking', color: 'black' };
// А у экземпляров класса Dog есть собственные свойства: { name, age, weight }
// Например: const someDog = new Dog('tuzik', 4, 10); // { name: 'tuzik', age: 4, weight: 10 };
// Реализуйте наследование класса Animal классом Dog,
// так чтобы все экземпляры класса Dog имели свойства { movingType, color, name, age, weight };
// Например: const someDog = new Dog('walking', 'black', 'tuzik', 4, 10); // { movingType: 'walking', color: 'black', name: 'tuzik', age: 4, weight: 10 };

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
