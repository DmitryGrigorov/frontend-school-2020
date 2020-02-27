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

function calculate(item, num, prices) {
  const keys = Object.keys(prices);
  return ~keys.indexOf(item)
    ? prices[item] * num || "Извините, товар закончился!"
    : "Такого товара у нас еще нет!";
}

// prices = { apple: 100, pear: 500, melon: 400, lemon: undefined };

// console.log(calculate("potato", 1, prices));
// console.log(calculate("lemon", 2, prices));
// console.log(calculate("pear", 4, prices));
// console.log(calculate("toString", 4, prices));
// console.log(prices);

// 2)
// напишите функцию deepClone глубокого клонирования объекта, которая создаёт глубокую копию объекта
// * - глубокая копия - это значит, что если внутри объекта есть свойства объекты - их нужно тоже склонировать
//
// Например: let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }; // есть такой объект
// let cloneSomeObj = deepClone(someObj); // создаем его копию
// cloneSomeObj -> { name: 'Petya', metrics: { weight: 80, height: 180 } }; // копия повторяет структуру первоначального объекта
// cloneSomeObj === someObj // false при сравнении копия и первоначальный объект не равны
// cloneSomeObj.metrics === someObj.metrics // false при сравнении вложенного объекта они тоже не равны

function deepClone(obj) {
  const clone = {};

  for (let key in obj) {
    clone[key] =
      typeof obj[key] === "object" && obj[key] !== null
        ? deepClone(obj[key])
        : obj[key];
  }

  return clone;
}

// let someObj = {
//   name: "Petya",
//   metrics: { weight: 80, height: { minHeight: 160, maxHeight: 180 } },
//   testProperty: null
// };

// let cloneSomeObj = deepClone(someObj);
// console.log(cloneSomeObj);
// console.log(cloneSomeObj === someObj);
// console.log(cloneSomeObj.metrics === someObj.metrics);

// 3)
// напишите функцию merge для объединения объектов НЕ используя встроеный метод Object.assign
// колличество передаваемых аргументов в функцию НЕ ограничено (вложенные объекты копируются по ссылке)
//
// Например:
// let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
// unionObject -> { name: 'Vasya', age: 45, isAdmin: true }

function merge(...objArr) {
  let mergedObj = {};
  objArr.forEach(obj => {
    mergedObj = { ...mergedObj, ...obj };
  });

  return mergedObj;
}

let unionObject = merge({}, { name: "Vasya" }, { age: 45 }, { isAdmin: true });
// console.log(unionObject);

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

const dog = { name: "Bobik" };

dog.bark = function(n = 1) {
  console.log(`${this.name}:${" bark".repeat(n)}`);
};

// dog.bark();
// dog.bark(1);
// dog.bark(4);

// 5)
// Есть объект товара item = { label: 'phone', price: 500, currency: '$' };
// сделайте так, чтобы при преобразовании данного объекта
// к строке возвращалась строка => "500$",
// а при преобразовании к числе возвращалось просто 500
// обратите внимание, что 500 и $ это значения полей самого объекта (если их поменять то это будет учитываться при последующих преобразованиях)

const item = { label: "phone", price: 500, currency: "$" };

item[Symbol.toPrimitive] = function(type) {
  if (type == "string") {
    return this.price + this.currency;
  }

  if (type == "number") {
    return this.price;
  }

  return null;
};

// через методы toString и valueOf

// item.toString = function() {
//   return this.price + this.currency;
// };

// item.valueOf = function() {
//   return this.price;
// };

// console.log(String(item));
// console.log(+item);

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

function Dog(
  name,
  age = 1,
  breed = "unknown",
  weight = 10,
  height = 10,
  position = "place",
  status = "sitting"
) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.weight = weight;
  this.height = height;
  this.position = position;
  this.status = status;
  this.bark = () => console.log(`${this.name}: bark`);
  this.place = () => (this.position = "place");
  this.come = () => (this.position = "here");
  this.goOut = () => (this.position = "go out");
  this.sit = () => (this.status = "sitting");
  this.standing = () => (this.status = "standing");
  this.lying = () => (this.status = "lying");
}

// const dog1 = new Dog("Red", 1, "unknown", 50, 50, "place", "sitting");
// dog1.bark();

// console.log(dog1.position);
// dog1.come();
// console.log(dog1.position);

const dogs = [];
const dogNames = [
  "Макс",
  "Бейли",
  "Чарли",
  "Бадди",
  "Рокки",
  "Джейк",
  "Джек",
  "Тоби",
  "Коди",
  "Бустер",
  "Герцог",
  "Купер",
  "Райли",
  "Харлей",
  "Биар",
  "Такер",
  "Мерфи",
  "Лаки",
  "Оливер",
  "Сэм",
  "Оскар",
  "Тедди",
  "Уинстон",
  "Сэмми",
  "Расти"
];

for (let i = 0; i < 25; i++) {
  dogs.push(new Dog(dogNames[i]));
}

console.log(dogs);
