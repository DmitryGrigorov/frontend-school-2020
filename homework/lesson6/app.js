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

// function Cat(name){
//     this.name = name;
//     this.state = 'lying';
// }
// Cat.prototype.meow = function(){
//     console.log(this.name + ': meow')
// }
// Cat.prototype.up = function(){
//     this.state = 'standing';
// }
// Cat.prototype.down = function(){
//     this.state = 'lying';
// }

// const cat = new Cat('murzik');
// console.log(cat.name); // 'murzik'
// console.log(cat.state); // 'lying'
// cat.up();
// console.log(cat.state); // 'standing'
// cat.down();
// console.log(cat.state); // 'lying'
// cat.meow(); // выводит в консоль "murzik: meow"


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

// const dictionary = Object.create(null, {
//     'hello':{
//         value:'привет'
//     },
//     'good morning':{
//         value:'доброе утро'
//     }
//     });

// dictionary['hello'] = 'привет';
// dictionary['good morning'] = 'доброе утро';
// console.log(dictionary['hello']); // 'привет'
// console.log(dictionary['good morning']); // 'доброе утро'
// console.log(dictionary['toString']); // undefined

// 3
// Напишите полифил для метода массива forEach

// см файл forEach-polyfill.js
//имитация работы старого браузера в том же файле

//проверка работы
const arr1 = [1, 2, 3];
arr1.forEach(function(item){
    console.log(item);
});

// 4
// Напишите полифил для метода массива join

// см файл join-polyfill.js
//имитация работы старого браузера в том же файле

//проверка работы
const arr2 = [1, 2, 3];
console.log(arr2.join('-'));

// 5 (наследование свойст без прототипов)
// Создайте два конструктора Animal и Dog
// У всех экземпляров класса Animal есть собственные (не наследуемые) свойства: { movingType, color }
// Например: const someAnimal = new Animal('walking', 'black'); // { movingType: 'walking', color: 'black' };
// А у экземпляров класса Dog есть собственные свойства: { name, age, weight }
// Например: const someDog = new Dog('tuzik', 4, 10); // { name: 'tuzik', age: 4, weight: 10 };
// Реализуйте наследование класса Animal классом Dog,
// так чтобы все экземпляры класса Dog имели свойства { movingType, color, name, age, weight };
// Например: const someDog = new Dog('walking', 'black', 'tuzik', 4, 10); // { movingType: 'walking', color: 'black', name: 'tuzik', age: 4, weight: 10 };

function Animal(movingType, color){
    this.movingType = movingType,
    this.color = color
}
function Dog(movingType, color, name, age, weight){
    this.name = name,
    this.age = age, 
    this.weight = weight,
    Animal.call(this, movingType, color)
}

const someDog = new Dog('walking', 'black', 'tuzik', 4, 10);
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

function Transport(){
    this.status = 'stopped',
    this.run = function(){
        
        this.status = 'running';
    },
    this.stop = function(){
        
        this.status = 'stopped';
       
    }

}
function Car(){
   
}
Car.prototype=new Transport();

 

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
