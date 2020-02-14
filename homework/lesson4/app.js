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
console.log('1)');

function calculate(name, number, prices) {
    if (!(name in prices)) {
        return 'Такого товара у нас еще нет!';
    }
    if (!(prices[name])) {
        return 'Извините, товар закончился';
    }
    return number * prices[name];
}

console.log(calculate('potato', 1, {apple: 100, pear: 500, melon: 400, lemon: undefined})); // Такого товара у нас еще нет!
console.log(calculate('lemon', 2, {apple: 100, pear: 500, melon: 400, lemon: undefined})); // Извините, товар закончился!
console.log(calculate('pear', 4, {apple: 100, pear: 500, melon: 400, lemon: undefined})); // 2000

// 2)
// напишите функцию deepClone глубокого клонирования объекта, которая создаёт глубокую копию объекта
// * - глубокая копия - это значит, что если внутри объекта есть свойства объекты - их нужно тоже склонировать
//
// Например: let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }; // есть такой объект
// let cloneSomeObj = deepClone(someObj); // создаем его копию
// cloneSomeObj -> { name: 'Petya', metrics: { weight: 80, height: 180 } }; // копия повторяет структуру первоначального объекта
// cloneSomeObj === someObj // false при сравнении копия и первоначальный объект не равны
// cloneSomeObj.metrics === someObj.metrics // false при сравнении вложенного объекта они тоже не равны
console.log('2)');

function deepClone(obj) {
    let clone = {};
    for (key in obj) {
        if (typeof (obj[key]) === "object") {
            clone[key] = deepClone(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }
    return clone;
}

let someObj = {name: 'Petya', metrics: {weight: 80, height: 180}};
let cloneSomeObj = deepClone(someObj);
console.log(cloneSomeObj === someObj);
console.log(cloneSomeObj.metrics === someObj.metrics);


// 3)
// напишите функцию merge для объединения объектов НЕ используя встроеный метод Object.assign
// колличество передаваемых аргументов в функцию НЕ ограничено (вложенные объекты копируются по ссылке)
// 
// Например:
// let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
// unionObject -> { name: 'Vasya', age: 45, isAdmin: true }
console.log('3)');

function merge() {
    let obj = {};
    for (i in arguments) {
        for (key in arguments[i]) {
            obj[key] = arguments[i][key];
        }
    }
    return obj;
}

console.log(merge({id: 3}, {name: 'Vasya', lastname: 'Pupkin'}, {age: 45}, {isAdmin: true}));
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
console.log('4)');
let dog = {name: 'Bobik'};
dog.bark = function (number = 1) {
    console.log('При n = ' + number + ": " + this.name + ":" + " bark".repeat(number));
};
dog.bark(4);
// 5)
// Есть объект товара item = { label: 'phone', price: 500, currency: '$' };
// сделайте так, чтобы при преобразовании данного объекта
// к строке возвращалась строка => "500$",
// а при преобразовании к числе возвращалось просто 500
// обратите внимание, что 500 и $ это значения полей самого объекта (если их поменять то это будет учитываться при последующих преобразованиях)
console.log('5)');
let item = {label: 'phone', price: 500, currency: '$'};
item.toString = function () {
    return this.price + this.currency;
};
item.valueOf = function () {
    return this.price;
};
console.log('toString: ' + item.toString());
console.log('valueOf: ' + item.valueOf());
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
console.log('6)');

function Dog(name, age, breed, weight, height, position, status) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.weight = weight;
    this.height = height;
    this.position = position;
    this.status = status;
    this.bark = function () {
        console.log(this.name + ": bark");
    };
    this.place = () => this.position = 'place';
    this.come = () => this.position = 'here';
    this.goOut = () => this.position = 'go out';
    this.sit = () => this.status = 'sitting';
    this.stand = () => this.status = 'standing';
    this.down = () => this.status = 'lying';

}

dog = [];
dog.push(new Dog("Rex", 6, 'Bulldog', 27, 37));
dog.push(new Dog("Stefan", 2, 'Beagle', 10, 23));
dog.push(new Dog("Max", 6, 'Dachshund', 17, 26));
dog.push(new Dog("Rocky", 12, 'Dalmatian', 14, 45));
dog.push(new Dog("Cooper", 1, 'Hovawart', 6, 34));
dog.push(new Dog("Bear", 3, 'Pekingese', 23, 23));
dog.push(new Dog("Bentley", 7, 'Hovawart', 28, 36));
dog.push(new Dog("Charlie", 4, 'Beagle', 16, 23));
dog.push(new Dog("Buddy", 4, 'Bulldog', 14, 31));
dog.push(new Dog("Stefan", 11, 'Sloughi', 16, 45));
dog.push(new Dog("Duke", 3, 'Bulldog', 21, 36));
dog.push(new Dog("Zeus", 8, 'Pekingese', 8, 23));
dog.push(new Dog("Rex", 12, 'Poodle', 14, 27));
dog.push(new Dog("Toby", 8, 'Beagle', 18, 19));
dog.push(new Dog("Rex", 8, 'Sloughi', 16, 26));
dog.push(new Dog("Bella", 5, 'Pekingese', 9, 19));
dog.push(new Dog("Lola", 6, 'Bulldog', 30, 41));
dog.push(new Dog("Chloe", 3, 'Beagle', 11, 25));
dog.push(new Dog("Rex", 3, 'Poodle', 16, 29));
dog.push(new Dog("Daisy", 1, 'Beagle', 14, 23));
dog.push(new Dog("Bella", 13, 'Bulldog', 24, 43));
dog.push(new Dog("Stefan", 9, 'Sloughi ', 16, 24));
dog.push(new Dog("Rocky ", 9, 'Bulldog', 25, 35));
dog.push(new Dog("Stefan", 4, 'Beagle', 16, 23));
dog.push(new Dog("Luna", 5, 'Poodle', 10, 21));

// dog.bark() => Выводит в консоль '{{имя собаки}}: bark';
// dog.place() => Меняет свойство position на строку 'place';
// dog.come() => Меняет свойство position на строку 'here';
// dog.goOut() => Меняет свойство position на строку 'go out';
// dog.sit() => Меняет свойство status на строку 'sitting';
// dog.stand() => Меняет свойство status на строку 'standing';
// dog.down() => Меняет свойство status на строку 'lying';

dog[0].bark();
console.log('place: ' + dog[0].place());
console.log('goOut: ' + dog[0].goOut());
console.log('come: ' + dog[0].come());
console.log('sit: ' + dog[0].sit());
console.log('stand: ' + dog[0].stand());
console.log('down: ' + dog[0].down());
