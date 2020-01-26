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

const calculate = (name, amount, object) => {
  if (name in object) {
    return object[name]
      ? object[name] * amount
      : console.log("Извините, товар закончился!");
  }
  return console.log("Такого товара у нас еще нет!");
};

// 2)
// напишите функцию deepClone глубокого клонирования объекта, которая создаёт глубокую копию объекта
// * - глубокая копия - это значит, что если внутри объекта есть свойства объекты - их нужно тоже склонировать
//
// Например: let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }; // есть такой объект
// let cloneSomeObj = deepClone(someObj); // создаем его копию
// cloneSomeObj -> { name: 'Petya', metrics: { weight: 80, height: 180 } }; // копия повторяет структуру первоначального объекта
// cloneSomeObj === someObj // false при сравнении копия и первоначальный объект не равны
// cloneSomeObj.metrics === someObj.metrics // false при сравнении вложенного объекта они тоже не равны

const deepClone = obj => {
  const cloneObj = {};
  for (key in obj) {
    cloneObj[key] =
      typeof obj[key] === "object" && obj[key] !== null
        ? deepClone(obj[key])
        : obj[key];
  }
  return cloneObj;
};

let someObj = { name: "Petya", metrics: { weight: 80, height: 180 } };

let cloneSomeObj = deepClone(someObj);

// 3)
// напишите функцию merge для объединения объектов НЕ используя встроеный метод Object.assign
// колличество передаваемых аргументов в функцию НЕ ограничено (вложенные объекты копируются по ссылке)
//
// Например:
// let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
// unionObject -> { name: 'Vasya', age: 45, isAdmin: true }

const merge = (...rest) => {
  return rest.reduce((previous, current) => {
    return { ...previous, ...current };
  }, {});
};

let unionObject = merge({}, { name: "Vasya" }, { age: 45 }, { isAdmin: true });

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

let dog = { name: "Bobik" };

dog.bark = function(count) {
  console.log(`${this.name}:${" bark".repeat(count | 1)}`);
};

// 5)
// Есть объект товара item = { label: 'phone', price: 500, currency: '$' };
// сделайте так, чтобы при преобразовании данного объекта
// к строке возвращалась строка => "500$",
// а при преобразовании к числе возвращалось просто 500
// обратите внимание, что 500 и $ это значения полей самого объекта (если их поменять то это будет учитываться при последующих преобразованиях)

let item = {
  label: "phone",
  price: 500,
  currency: "$"
};

item[Symbol.toPrimitive] = function(type) {
  return type === "string" ? this.price + this.currency : this.price;
};

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

function Dog(name, age, breed, weight, height) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.weight = weight;
  this.height = height;
  this.position = "place";
  this.status = "lying";

  this.bark = function() {
    console.log(`${this.name}: bark`);
  };
  this.place = function() {
    this.position = "place";
  };
  this.come = function() {
    this.position = "here";
  };
  this.goOut = function() {
    this.position = "go out";
  };
  this.sit = function() {
    this.status = "sitting";
  };
  this.stand = function() {
    this.status = "standing";
  };
  this.down = function() {
    this.status = "lying";
  };
}

const dogArray = [
  new Dog("Sharik", 5, "Haski", 12, 21),
  new Dog("Sonya", 3, "Buldog", 11, 20),
  new Dog("Mihail", 2, "Mops", 6, 8),
  new Dog("Gleb", 10, "Haski", 12, 21),
  new Dog("Tuzik", 3, "Pudel", 15, 16),
  new Dog("Ben", 5, "Buldog", 5, 9),
  new Dog("Jonny", 3, "Pudel", 7, 12),
  new Dog("Zhuchka", 7, "Mops", 15, 18),
  new Dog("Baron", 13, "Haski", 15, 20),
  new Dog("Ignat", 5, "Buldog", 12, 21),
  new Dog("Bogdan", 8, "Haski", 14, 17),
  new Dog("Gercog", 12, "Mops", 19, 21),
  new Dog("Adolf", 14, "Buldog", 8, 8),
  new Dog("Pyos", 6, "Pudel", 12, 22),
  new Dog("Aren", 15, "Ovcharka", 16, 21),
  new Dog("Casper", 2, "Haski", 10, 8),
  new Dog("Stas", 4, "Buldog", 8, 10),
  new Dog("Bethowen", 8, "Mops", 12, 21),
  new Dog("Volt", 3, "Haski", 16, 15),
  new Dog("Bob", 2, "Pudel", 6, 8),
  new Dog("Filya", 9, "Buldog", 17, 21),
  new Dog("Strelka", 8, "Mops", 12, 13),
  new Dog("Oscar", 6, "Haski", 14, 17),
  new Dog("Fenix", 5, "Ovcharka", 12, 18),
  new Dog("Belka", 6, "Pudel", 13, 15)
];
