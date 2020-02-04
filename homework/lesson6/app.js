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
}

Cat.prototype.meow = function(){
    console.log(`${this.name}: meow`);
}

Cat.prototype.up = function(){
    this.state = 'standing';
}

Cat.prototype.down = function(){
    this.state = 'lying';
}

const cat = new Cat('murzik');


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

let dictionary = {} //create an empty Obj and reset it's prototype to null
Object.setPrototypeOf(dictionary, null);

dictionary['hello'] = 'привет'; //set new values
dictionary['good morning'] = 'доброе утро';


// 3
// Напишите полифил для метода массива forEach

const arr = ['a', 'b', 'c'];

Array.prototype.forEach = undefined;

(function () {
    if(!Array.prototype.forEach) {
      Array.prototype.forEach = function(func) {
        const arr = this;

        for (let i = 0; i < arr.length; i++) {
            func(arr[i], i, arr); //call function with typical forEach params: ite, index, array
        }
  
        //no return
      }
    }
})();

// arr.forEach((item, index, arr) => console.log(item + ' ' + index + ' ' + arr + '\n'));


// 4
// Напишите полифил для метода массива join

(function () {
    if(!Array.prototype.join) {
      Array.prototype.join = function(separator) {
        let result = '';

        for (let i = 0; i < this.length; i++) {
            result = result + this[i] + separator;
        }
  
        return result.slice(0, -1); //remove last symbol
      }
    }
})();


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

function Dog(name, age, weight, ...otherParameters) {
    Animal.apply(this, otherParameters);

    this.name = name;
    this.age = age;
    this.weight = weight;
}


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

function Transport () {
    this.status = 'stopped';

    this.run = function(){
        return this.status = 'running';
    }

    this.stop = function(){
        return this.status = 'stopped';
    }
}

function Car() {
    Transport.call(this);
}