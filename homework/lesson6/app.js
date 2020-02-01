// 1
// Создайте конструктор Cat экземпляры которого (объекты созданные с помощью данного конструктора)
// должны содержать свойства { name, state }
// и должны наследовать методы из прототипа
// meow - выводит в консоль строку "ИМЯ_КОШКИ: meow"
// up - меняет состояние кошки на 'standing'
// down - меняет состояние кошки на 'lying'

function Cat(name, state) {
    this.name = name;
    this.state = state;
}

Cat.prototype.meow = function() {
    console.log(this.name + ": meow");
}
Cat.prototype.up = function() {
    this.state = "standing";
}
Cat.prototype.down = function() {
    this.state = "lying";
}

const cat = new Cat('murzik', 'lying');
console.log(cat.name); // 'murzik'
console.log(cat.state); // 'lying'
cat.up();
console.log(cat.state); // 'standing'
cat.down();
console.log(cat.state); // 'lying'
cat.meow(); // выводит в консоль "murzik: meow"


// 2
// Cоздайте объект dictionary в котором будут содержаться переводы слов с английского на русский
// при отсутсвии перевода в данном объекте - должно возвращаться значение undefined
//
const dictionary = {
    "hello": 'привет',
    "good morning": 'доброе утро',
};
Object.prototype.toString = undefined;

dictionary['hello'] = 'привет';
dictionary['good morning'] = 'доброе утро';
console.log(dictionary['hello']); // 'привет'
console.log(dictionary['good morning']); // 'доброе утро'
console.log(dictionary['toString']); // undefined


// 3
// Напишите полифил для метода массива forEach
//alert(Array.prototype.join);
var fruits = ['Яблоко', 'Банан'];
//console.log(fruits.join("-"));

Array.prototype.forEach = undefined;

if (!Array.prototype.forEach) {
	Array.prototype.forEach = function(fn) {
        //debugger;
		for(var i = 0, len = this.length; i < len; ++i)
		{
            //console.log(this);
            //console.log(this[i]);
			fn.call(this, this[i]);
		}
	}
}

fruits.forEach(function(item) {
    console.log(item);
});

// 4
// Напишите полифил для метода массива join

Array.prototype.join = undefined;
//console.log(fruits.join("-"));
//alert(!Array.prototype.join);

(function () {
    if(!Array.prototype.join) {
      Array.prototype.join = function(separator) {
        var result = '';

        for (var i = 0; i < this.length; i++) {
          result += result ? separator + this[i] : this[i];
        }

        return result;
      }
    }
  })();

  console.log(fruits.join("==="));


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
};
const catOne = new Animal('walking', 'black');
const catTwo = new Animal('running', 'white');

function Dog(name, age, weight, ...args) {
    Animal.apply(this, args);
    this.name = name;
    this.age = age;
    this.weight = weight;
};

const dogOne = new Dog('tuzik', 4, 10, 'walking', 'black',);
const dogTwo = new Dog('Teddi', 2, 8, 'running', 'white');
console.log(dogOne);


// 6 (наследование через прототипы)
// Создайте два конструктора Transport и Car
// Эклемпляры конструктора Transport имеют свойтсво status и методы run и stop,
// которые меняют свойсто status на 'running' и 'stopped' соответсвтенно.
// Унаследуйте эти методы и свойство конструктором Car

function Transport () {
};
Transport.prototype.status = "stopped";
Transport.prototype.run = function() {
    return this.status = "running";
};
Transport.prototype.stop = function() {
    return this.status = "stopped";
};

function Car () {
    //Transport.apply(this);
};
Car.prototype = Object.create(Transport.prototype);
Car.prototype.constructor = Car;


const someTransport = new Transport();
console.log(Transport.prototype);

console.log(someTransport.status); // 'stopped'
console.log(someTransport.run()); // 'running'
console.log(someTransport.stop()); // 'stopped'

const someCar = new Car();

console.log(someCar);

console.log(someCar.status); // 'stopped'
console.log(someCar.run()); // 'running'
console.log(someCar.stop()); // 'stopped'
