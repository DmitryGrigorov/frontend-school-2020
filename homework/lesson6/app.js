/*
 1
 Создайте конструктор Cat экземпляры которого (объекты созданные с помощью данного конструктора)
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

Решение:
* /
function Cat(name){
 let stateDefault = 'lying'

 this.name = name
 this.state = stateDefault
 this.meow = function(){ document.write(`${this.name}: meow`) }
 this.up = function(){ this.state = 'standing' }
 this.down = function(){ this.state = stateDefault }
}

let cat = new Cat('murzik');
document.write(cat.name + '<br>'); // 'murzik'
document.write(cat.state + '<br>'); // 'lying'
cat.up();
document.write(cat.state + '<br>'); // 'standing'
cat.down();
document.write(cat.state + '<br>'); // 'lying'
cat.meow(); // выводит в консоль "murzik: meow"
//*/


/*
 2
 Cоздайте объект dictionary в котором будут содержаться переводы слов с английского на русский
 при отсутсвии перевода в данном объекте - должно возвращаться значение undefined

 Например:
 dictionary['hello'] = 'привет';
 dictionary['good morning'] = 'доброе утро';
 console.log(dictionary['hello']); // 'привет'
 console.log(dictionary['good morning']); // 'доброе утро'
 console.log(dictionary['toString']); // undefined

Решение:
* /
const dictionary = new Object()
Object.setPrototypeOf(dictionary, null)

dictionary['hello'] = 'привет';
dictionary['good morning'] = 'доброе утро';
document.write(dictionary['hello'] + '<br>'); // 'привет'
document.write(dictionary['good morning'] + '<br>'); // 'доброе утро'
document.write(dictionary['toString']); // undefined
//*/

/*
3
Напишите полифил для метода массива forEach

Решение:
* /
(function(){
// if(!Array.prototype.forEach){
  Array.prototype.forEach = function(fn){
   for(var i = 0; i < this.length; i++){
    fn(this[i], i, this);
   }
  }
// }
})()

var aA = ['first', 'last', {a: 1, b: 2}, 3, 4, ['a', 'b'], 0];
aA.forEach(function(v, k, a){ document.write(`${a}[${k}] = ${v}<br>`); })
//*/

/*
4
Напишите полифил для метода массива join

Решение:
* /
(function(){
//if(!Array.prototype.join){
 Array.prototype.join = function(connector){
  var str = '';
  if(connector === undefined){ connector = ','; }

  for(var i = 0; i < this.length; i++){
   if(i > 0){ str += connector; }
   str += this[i];
  }

  return str;
 }
//}
})()

var aA = ['first', 'last', {a: 1, b: 2}, 3, 4, ['a', 'b'], 0];
document.write(aA.join())
//*/

/*
5 (наследование свойств без прототипов)
Создайте два конструктора Animal и Dog
У всех экземпляров класса Animal есть собственные (не наследуемые) свойства: { movingType, color }
Например: const someAnimal = new Animal('walking', 'black'); // { movingType: 'walking', color: 'black' };
А у экземпляров класса Dog есть собственные свойства: { name, age, weight }
Например: const someDog = new Dog('tuzik', 4, 10); // { name: 'tuzik', age: 4, weight: 10 };
Реализуйте наследование класса Animal классом Dog,
так чтобы все экземпляры класса Dog имели свойства { movingType, color, name, age, weight };
Например: const someDog = new Dog('walking', 'black', 'tuzik', 4, 10); // { movingType: 'walking', color: 'black', name: 'tuzik', age: 4, weight: 10 };

Решение:
* /
function Animal(movingType, color){
 this.movingType = movingType
 this.color = color
}
const someAnimal = new Animal('walking', 'black')

function Dog(name, age, weight, ...props){
 Animal.apply(this, props)

 this.name = name
 this.age = age
 this.weight = weight
}
const someDog = new Dog('tuzik', 4, 10)

const someDog_ = new Dog(
 'tuzik', 4, 10,
 'walking', 'black'
)
console.log(someDog_)
//*/

/*
6 (наследование через прототипы)
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

Решение:
* /
function Transport(){
 Transport.prototype.status = 'stopped'
 Transport.prototype.run = () => { return this.status = 'running' }
 Transport.prototype.stop = () => { return this.status = 'stopped' }
}
function Car(){}
Car.prototype = Object.create(Transport.prototype)
Car.prototype.constructor = Car

const someTransport = new Transport()
console.log(someTransport.status)
console.log(someTransport.run())
console.log(someTransport.stop())
const someCar = new Car()
console.log(someCar.status)
console.log(someCar.run())
console.log(someCar.stop())
//*/