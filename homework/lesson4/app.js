 // 1)
// напишите функцию calculate которая принимает 3 аргумента:
// 1 - наименование товара,
// 1 - количество товаров,
// 2 - объект с ценами, например: prices = { apple: 100, pear: 500, melon: 400, lemon: undefined };
// Если при вызове функции передать товар которого НЕТ в прайс листе, она должна вернуть "Такого товара у нас еще нет!";
// Если при вызове функции передать товар который есть в прайс листе но его цена = undefined, то функция должна вернуть "Извините, товар закончился!"
// Если при вызове функции передать товар который есть в прайс листе и у него есть цена, то посчитать итоговую цену и вернуть её
// Например:
// calculate('potato', 1, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // Такого товара у нас еще нет!
// calculate('lemon', 2, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // Извините, товар закончился!
// calculate('pear', 4, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // 2000

let prices = { apple: 100, pear: 500, melon: 400, lemon: undefined };

function calculate (name, number, object) {
  for (let key in object) {
    if (key === name) {
      return object[key] === undefined ? 'Извините, товар закончился!' : object[key] * number;
    }
  }
  
  return 'Такого товара нет!';
}


// 2)
// напишите функцию deepClone глубокого клонирования объекта, которая создаёт глубокую копию объекта
// * - глубокая копия - это значит, что если внутри объекта есть свойства объекты - их нужно тоже склонировать
//
// Например: let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }; // есть такой объект
// let cloneSomeObj = deepClone(someObj); // создаем его копию
// cloneSomeObj -> { name: 'Petya', metrics: { weight: 80, height: 180 } }; // копия повторяет структуру первоначального объекта
// cloneSomeObj === someObj // false при сравнении копия и первоначальный объект не равны
// cloneSomeObj.metrics === someObj.metrics // false при сравнении вложенного объекта они тоже не равны

 const deepClone = (object) => {
   const obj = {};
  
   for (let key in object) {
   //   if(typeof object[key] === 'object') {
   //     deepClone(object[key]);
   //   } else {
       obj[key] = object[key];
     // }
   }
  
   return obj;
 };

// 3)
// напишите функцию merge для объединения объектов НЕ используя встроеный метод Object.assign
// колличество передаваемых аргументов в функцию НЕ ограничено (вложенные объекты копируются по ссылке)
// 
// Например:
// let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
// unionObject -> { name: 'Vasya', age: 45, isAdmin: true }

const merge = (...rest) => {
  const union = {};
  rest.forEach((item) => {
    for (let key in item) {
      union[key] = item[key];
  }
  });
  
  return union;
};
// 4)
// Есть объект dog = { name: 'Bobik' };
// "научите" данный объект подавать голос, например он должен выводить в консоль строку "{{Здесь имя собаки}}: bark";
// Например:
// dog.bark(); // => "Bobik: bark"
//
// попробуйте "научить" собаку подавать голос столько раз сколько нам нужно
// Например:
// dog.bark(4); // => "Bobik: bark bark bark bark"
// dog.bark(); // => "Bobik: bark" если аргумент не передать - метод все равно сработает

 const dog = { name: 'Bobik' };
 
 dog.bark = function(num) {
   let bark = 'bark';
   let i = num || 0;
   
   for (let j = 1; j < i; j++) {
     bark = `${bark} bark`;
   }
   console.log(`${this.name}: ${bark}`);
 };
// 5)
// Есть объект товара item = { label: 'phone', price: 500, currency: '$' };
// сделайте так, чтобы при преобразовании данного объекта
// к строке возвращалась строка => "500$",
// а при преобразовании к числе возвращалось просто 500
// обратите внимание, что 500 и $ это значения полей самого объекта (если их поменять то это будет учитываться при последующих преобразованиях)

 const item = { label: 'phone', price: 500, currency: '$' };
 
 item.toString = function() { return this.price + this.currency };
 item.valueOf = function() { return this.price };

 // 6)
// напишите конструктор Dog который создает объект со свойствами name, age, breed, weight, height, position, status
// и методами:
// dog.bark() => Выводит в консоль '{{имя собаки}}: bark';
// dog.place() => Меняет свойство position на строку 'place';
// dog.come() => Меняет свойство position на строку 'here';
// dog.goOut() => Меняет свойство position на строку 'go out';
// dog.sit() => Меняет свойство status на строку 'sitting';
// dog.stand() => Меняет свойство status на строку 'standing';
// dog.down() => Меняет свойство status на строку 'lying';
//
// создайте массив с 25 объектами Dog

function Dog(name, age, breed, weight, height, position, status) {
  
  this.name = name || 'Bobik';
  this.age = age || '1';
  this.breed = breed || 'chihua hua';
  this.weight = weight || 100;
  this.height = height || 100;
  this.position = position || 0;
  this.status = status || 'stopped';
  
  this.bark = () =>  `${this.name}: bark`;
  
  this.place = () => {
    this.position = 'place';
  };
  
  this.come = () => {
    this.position = 'here';
  };
  
  this.goOut = () => {
    this.position = 'go out';
  };
  
  this.sit = () => {
    this.status = 'sitting';
  };
  
  this.stand = () => {
    this.status = 'standing';
  };
  
  this.down = () => {
    this.status = 'lying';
  };
}

const count = 25;

let dogs = [];

for (let i = 0; i < count; i++) {
  dogs.push(new Dog);
}

