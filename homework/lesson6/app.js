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

function Cat(name){
    this.name = name;
    this.state = 'lying';
}
Cat.prototype.up = function (){
    this.state = 'standing';
}

Cat.prototype.down = function (){
    this.state = 'lying';
}

Cat.prototype.meow = function (){
    console.log(this.name + ': meow');
}

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

let dictionary = Object.create(null);

// dictionary['hello'] = 'привет';
// dictionary['good morning'] = 'доброе утро';
// console.log(dictionary['hello']); // 'привет'
// console.log(dictionary['good morning']); // 'доброе утро'
// console.log(dictionary['toString']); // undefined

// 3
// Напишите полифил для метода массива forEach

// убираем метод forEach из prototype у массива 
// Array.prototype.forEach = undefined;

let arr = [1,4];

// arr.forEach((el, i, arr)=>{
//     console.log(el);
// });

(function () {
    if (Array.prototype.forEach === undefined) {
        Array.prototype.forEach = function (func, thisArg = null) {
            if ((this.length > 0)) {

                for (var i = 0; i < this.length; i++) {
                    if (thisArg) {
                        func.call(thisArg, this[i], i, this);
                    } else {
                        func.call(this, this[i], i, this);
                    }
                }

            }
        }
    }
})();

// arr.forEach((el)=>{
//     console.log(this);
//     console.log(el);
// });

//Проверка на смену аргумента this для callback-функции forEach - thisArg
// function Counter() {
//     this.sum = 0
//     this.count = 0
// }
// Counter.prototype.add = function (array) {
//     array.forEach(function (entry) {
//         this.sum += entry = this.count + 1
//     }, this)
//     // ^---- Note
// }

// const obj = new Counter()
// obj.add([2, 5, 9])
// console.log(obj);

// 4
// Напишите полифил для метода массива join (делали совместно на занятии)
// Напишите полифил для метода строки split

// убираем метод forEach из prototype у массива 
// String.prototype.split = undefined;

let str = 'Напишите полифил для метода строки split';

(function () {
    if (String.prototype.split === undefined) {
        String.prototype.split = function (separator, limit = null) {
            let hasLimit = (limit !== null && Number(limit) == limit);

            let output = [];
            let oneElement = '';
            for (let i = 0; i < this.length; i++) {
                if (this[i] === separator) {
                    output.push(oneElement);
                    oneElement = '';
                } else if ('' === separator) {
                    output.push(this[i]);
                } else {
                    oneElement = oneElement + this[i];
                }

                if (hasLimit && output.length == limit) 
                    break;

            }
            
            //последний элемент после разделителя
            //
            //в случае выполнения блока на проверку лимита в цикле
            //oneElement будет всегда пустой, так как
            //очищается при добавлении в массив output до проверки лимита
            //и не заполняется вообще при separator = ''
            if (oneElement != '') 
                output.push(oneElement);
            
            return output;

        }
    }
})();

// let arrStr = str.split(' ');
// let arr1Str = str.split('а');
// let arr2Str = str.split(' ', 3);
// let arr3Str = str.split('', 5);

// console.log(arrStr);
// console.log(arr1Str);
// console.log(arr2Str);
// console.log(arr3Str);

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
    this.movingType = movingType;
    this.color = color;
}

function Dog(name,  age, weight){
    this.name = name;
    this.age = age;
    this.weight = weight;
}

function Dog2(movingType, color, name,  age, weight){
    Animal.call(this, movingType, color);
    Dog.call(this, name,  age, weight);

    //или без Dog.call, если мы хотим заменить Dog на Dog2 полностью
    // this.name = name;
    // this.age = age;
    // this.weight = weight;
}
const someAnimal = new Animal('walking', 'black');
const someDog = new Dog('tuzik', 4, 10);
const someDog2 = new Dog2('walking', 'black', 'tuzik', 4, 10);

// console.log(someAnimal);
// console.log(someDog);
// console.log(someDog2);

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
    this.status = 'stopped';
}

Transport.prototype.run = function (){
    return this.status = 'running';
}
Transport.prototype.stop = function (){
    return this.status = 'stopped';
}
function Car(){
    Transport.apply(this);
}

const prototypeConnector = Object.create(Transport.prototype);

Car.prototype = prototypeConnector;
Car.prototype.constructor = Car;

// const someTransport = new Transport();
// console.log(someTransport.status); // 'stopped'
// console.log(someTransport.run()); // 'running'
// console.log(someTransport.stop()); // 'stopped'
// const someCar = new Car();
// console.log(someCar.status); // 'stopped'
// console.log(someCar.run()); // 'running'
// console.log(someCar.stop()); // 'stopped'
