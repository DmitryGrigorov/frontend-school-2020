/*
1)
напишите функцию calculate которая принимает 3 аргумента:
1 - наименование товара,
1 - количество товаров,
2 - объект с ценами, например: prices = { apple: 100, pear: 500, melon: 400, lemon: undefined };
Если при вызове функции передать товар которого НЕТ в прайс листе, она должна вернуть "Такого товара у нас еще нет!";
Если при вызове функции передать товар который есть в прайс листе но его цена = undefined, то функция должна вернуть "Извините, товар закончился!"
Если при вызове функции передать товар который есть в прайс листе и у него есть цена, то посчитать итоговую цену и вернуть её
Например:
calculate('potato', 1, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // Такого товара у нас еще нет!
calculate('lemon', 2, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // Извините, товар закончился!
calculate('pear', 4, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // 2000

Решение:
* /
const calculate = (nameOfGoods, quantityOfGoods, pricesOfGoods) => {
 let message = 'Такого товара у нас еще нет!'
 for(let k in pricesOfGoods){
  if(k === nameOfGoods){
   if(pricesOfGoods[k] === undefined){ message = 'Извините, товар закончился!' }
   else{ message = quantityOfGoods * pricesOfGoods[k] }
  }
 }
 
 return document.write(message + '<br>')
}
calculate('potato', 1, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // Такого товара у нас еще нет!
calculate('lemon', 2, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // Извините, товар закончился!
calculate('pear', 4, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // 2000
//*/

/*
2)
напишите функцию deepClone глубокого клонирования объекта, которая создаёт глубокую копию объекта
* - глубокая копия - это значит, что если внутри объекта есть свойства объекты - их нужно тоже склонировать

Например: let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }; // есть такой объект
let cloneSomeObj = deepClone(someObj); // создаем его копию
cloneSomeObj -> { name: 'Petya', metrics: { weight: 80, height: 180 } }; // копия повторяет структуру первоначального объекта
cloneSomeObj === someObj // false при сравнении копия и первоначальный объект не равны
cloneSomeObj.metrics === someObj.metrics // false при сравнении вложенного объекта они тоже не равны

Решение:
* /
const someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }
const deepClone = (object) => {
  let cloneObject = {}

  for(let k in object){
   if(object[k] !== null && typeof object[k] === 'object'){
    cloneObject[k] = Object.assign({}, object[k])
   } else{ cloneObject[k] = object[k] }
  }

  return cloneObject
}
const cloneSomeObj = deepClone(someObj)
document.write(JSON.stringify(cloneSomeObj) + '<br>')
document.write((cloneSomeObj === someObj) + '<br>')
document.write(cloneSomeObj.metrics === someObj.metrics)
//*/

/*
3)
напишите функцию merge для объединения объектов НЕ используя встроеный метод Object.assign
колличество передаваемых аргументов в функцию НЕ ограничено (вложенные объекты копируются по ссылке)

Например:
let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
unionObject -> { name: 'Vasya', age: 45, isAdmin: true }

Решение:
* /
const merge = (...aProps) => {
 let mergedObject = {}

 aProps.forEach(function(v, i, aProps){
  if(v !== null && typeof v === 'object'){
   for(let k in v){ mergedObject[k] = v[k] }
  }
 })

 return JSON.stringify(mergedObject);
}
document.write(merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true }))
//*/

/*
4)
Есть объект dog = { name: 'Bobik' };
"научите" данный объект подавать голос, например он должен выводить в консоль строку "{{Здесь имя собаки}}: bark";
Например:
dog.bark(); // => "Bobik: bark"

попробуйте "научить" собаку подавать голос столько раз сколько нам нужно
Например:
dog.bark(4); // => "Bobik: bark bark bark bark"
dog.bark(); // => "Bobik: bark" если аргумент не передать - метод все равно сработает

Решение:
* /
dog = { name: 'Bobik' }
dog.bark = (count = 1) => {
 let message = dog.name + ':'
 for(let i = 1; i <= count; i++){ message += ' bark' }

 return(console.log(message), document.write(message + '<br>'))
}
dog.bark(4); // => "Bobik: bark bark bark bark"
dog.bark(); // => "Bobik: bark" если аргумент не передать - метод все равно сработает
//*/

/*
5)
Есть объект товара item = { label: 'phone', price: 500, currency: '$' };
сделайте так, чтобы при преобразовании данного объекта
к строке возвращалась строка => "500$",
а при преобразовании к числе возвращалось просто 500
обратите внимание, что 500 и $ это значения полей самого объекта (если их поменять то это будет учитываться при последующих преобразованиях)

Решение:
* /
const item1 = { label: 'phone', price: 500, currency: '$' }
item1.toString = function(){ return `${this.price + this.currency}` },
item1.valueOf = function(){ return this.price }
document.write(`${item1}<br>`)
document.write(+item1)

document.write('<hr>') //или

const item2 = { label: 'phone', price: 500, currency: '$' }
item2[Symbol.toPrimitive] = function(hint){ return (hint === 'string') ? (this.price + this.currency) : this.price }
document.write(`${item2}<br>`)
document.write(+item2)
//*/

/*
6)
напишите конструктор Dog который создает объект со свойствами name, age, breed, weight, height, position, status
и методами:
dog.bark() => Выводит в консоль '{{имя собаки}}: bark';
dog.place() => Меняет свойство position на строку 'place';
dog.come() => Меняет свойство position на строку 'here';
dog.goOut() => Меняет свойство position на строку 'go out';
dog.sit() => Меняет свойство status на строку 'sitting';
dog.stand() => Меняет свойство status на строку 'standing';
dog.down() => Меняет свойство status на строку 'lying';

создайте массив с 25 объектами Dog

Решение (если я правильно понял, в чём сомневаюсь):
* /
function Dog(name){
 this.name = name,
 this.age = 1,
 this.breed = 'breed',
 this.weight = 2,
 this.height = 3,
 this.position = 'position',
 this.status = 'status',

 this.bark = function(){ //=> Выводит в консоль '{{имя собаки}}: bark';
  console.log(`${this.name}: bark`)
 }
 this.place = function(){ //=> Меняет свойство position на строку 'place';
  this.position = 'place'
 }
 this.come = function(){ //=> Меняет свойство position на строку 'here';
  this.position = 'here'
 }
 this.goOut = function(){ //=> Меняет свойство position на строку 'go out';
  this.position = 'go out'
 }
 this.sit = function(){ //=> Меняет свойство status на строку 'sitting';
  this.status = 'sitting'
 }
 this.stand = function(){ //=> Меняет свойство status на строку 'standing';
  this.status = 'standing'
 }
 this.down = function(){ //=> Меняет свойство status на строку 'lying';
  this.status = 'lying'
 }
}

let aDogs = []
for(let i = 0; i < 25; i++){
 aDogs[i] = new Dog(i)

 aDogs[i].bark()

 aDogs[i].place()
 console.log(`${aDogs[i].name}: ` + aDogs[i].position)

 aDogs[i].come()
 console.log(`${aDogs[i].name}: ` + aDogs[i].position)

 aDogs[i].goOut()
 console.log(`${aDogs[i].name}: ` + aDogs[i].position)

 aDogs[i].sit()
 console.log(`${aDogs[i].name}: ` + aDogs[i].status)

 aDogs[i].stand()
 console.log(`${aDogs[i].name}: ` + aDogs[i].status)

 aDogs[i].down()
 console.log(`${aDogs[i].name}: ` + aDogs[i].status)
}
//*/