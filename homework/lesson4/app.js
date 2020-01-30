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

// Решение: 

// let fruitName = prompt("Какой фрукт нужен?");
// let fruitNumber = prompt("Сколько штук?");
// let fruitPrices = {apple: 100, pear: 500, melon: 400, lemon: undefined};

// function calculate (name, number, prices) {
//   if (name in prices) {
//     if (prices[name] === undefined) {
//       alert("Извините, товар закончился!");
//     } else {
//       alert("Стоимость cocтавит " + (prices[name] * number));
//     }
//   } else {
//     alert("Такого товара у нас еще нет!");
//   }
// }

// calculate (fruitName, fruitNumber, fruitPrices);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2)
// напишите функцию deepClone глубокого клонирования объекта, которая создаёт глубокую копию объекта
// * - глубокая копия - это значит, что если внутри объекта есть свойства объекты - их нужно тоже склонировать
//
// Например: let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }; // есть такой объект
// let cloneSomeObj = deepClone(someObj); // создаем его копию
// cloneSomeObj -> { name: 'Petya', metrics: { weight: 80, height: 180 } }; // копия повторяет структуру первоначального объекта
// cloneSomeObj === someObj // false при сравнении копия и первоначальный объект не равны
// cloneSomeObj.metrics === someObj.metrics // false при сравнении вложенного объекта они тоже не равны

// Решение:

// function deepClone(obj) {
//  let clone = {};

//  for (let key in obj) {
//    const value = obj[key];

//    if (typeof(value) === 'object' && value !== null) {
//      clone[key] = deepClone(value);
//    } else if (value !== undefined) {
//        clone[key] = value;
//      }
//    }

//  return clone;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3)
// напишите функцию merge для объединения объектов НЕ используя встроеный метод Object.assign
// колличество передаваемых аргументов в функцию НЕ ограничено (вложенные объекты копируются по ссылке)
// 
// Например:

//let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
// unionObject -> { name: 'Vasya', age: 45, isAdmin: true }

// Решение:

// function clone (origin, clone) {
//   for (let key in clone) {
//     origin[key] = clone[key];
//     return origin;
//   }
// }

// function merge (...obj) {
//   return (obj.reduce(clone));
// }

// let unionObject = merge({}, {name: 'Vasya', size: {clothes: 'M', boots: 43}}, {age: 45}, {isAdmin: true});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

// Решение:

// let dog = { name: 'Bobik' };

// function bark(number) {
//   console.log(dog.name + ": bark " + "bark ".repeat(number - 1));
// }

// dog.bark = bark;

// dog.bark();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5)
// Есть объект товара item = { label: 'phone', price: 500, currency: '$' };
// сделайте так, чтобы при преобразовании данного объекта
// к строке возвращалась строка => "500$",
// а при преобразовании к числе возвращалось просто 500
// обратите внимание, что 500 и $ это значения полей самого объекта (если их поменять то это будет учитываться при последующих преобразованиях)

//Решение:

// let item = {
//   label: 'phone', 
//   price: 500, 
//   currency: '$',

//   [Symbol.toPrimitive](hint) {
//     alert(`hint: ${hint}`);
//     return hint == "string" ? this.price + this.currency : this.price;
//   }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//Решение:

// function Dog(name, age, breed, weight, height, position, status) {
//   this.name = name;
//   this.age = age;
//   this.breed = breed;
//   this.weight = weight;
//   this.height = height;
//   this.position = position;
//   this.status = status;

//   this.bark = function () {
//     console.log(this.name + ": bark");
//   };

//   this.place = function () {
//     this.position = "place";
//   };

//   this.come = function () {
//     this.position = "here";
//   };

//   this.goOut = function () {
//     this.position = "go out";
//   };

//   this.sit = function () {
//     this.status = "sit";
//   };

//   this.stand = function () {
//     this.status = "standing";
//   };

//   this.down = function () {
//     this.status = "lying";
//   };
// }

// let NAMES = ["Арчи", "Алекс", "Амур", "Алтaй", "Альф", "Барон", "Бутч", "Боня", "Бим", "Бадди", "Вольт", "Вальтер", "Веня", "Вольф", "Вулкан", "Гром", "Граф", "Грэй", "Гектор", "Гуччи", "Джек", "Дик", "Джонни", "Деймон", "Дёма", "Еврик", "Ерошка", "Енисей", "Елай", "Ермак", "Жорик", "Жан", "Жак", "Жулик", "Жоржик"];
// let BREEDS = ["овчарка", "терьер", "акита-ину", "бульдог", "маламут", "мастиф", "дог", "гончая", "доберман", "корги", "шпиц"];

// function creatArrDogs (count) {
//   var dogs = [];

//   for (let i = 0; i < count; i++) {
//     let name = NAMES[getRandomValue(NAMES)];
//     let age = getRandomInRange(1, 30);
//     let breed = BREEDS[getRandomValue(BREEDS)];
//     let weight = getRandomInRange(1, 70);
//     let height = getRandomInRange(15, 1500);

//     let dog = new Dog(name, age , breed, weight, height);
//     dogs.push(dog);
//   }

//   return dogs;
// }

// function getRandomInRange (min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomValue (arr) {
//   return Math.floor(Math.random() * arr.length);
// };

// let dogs = creatArrDogs(25);
// console.log(dogs);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
