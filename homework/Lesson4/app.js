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

// ========================= Решение задачи 1 ========================= //

function calculate (nameOfProduct, count, someObject) {
    
    let result = "";

    for (let key in someObject) {
        if (nameOfProduct == key) {
            if (someObject[key] === undefined) {
                result = "Извините, товар закончился!";
                return result;
            } else {
                result = count * someObject[key];
                return result;
            }
        }
    }
    return "Такого товара у нас еще нет!"
}

console.log(calculate('potato', 1, { apple: 100, pear: 500, melon: 400, lemon: undefined }));
console.log(calculate('lemon', 2, { apple: 100, pear: 500, melon: 400, lemon: undefined }));
console.log(calculate('pear', 4, { apple: 100, pear: 500, melon: 400, lemon: undefined }));

// 2)
// напишите функцию deepClone глубокого клонирования объекта, которая создаёт глубокую копию объекта
// * - глубокая копия - это значит, что если внутри объекта есть свойства объекты - их нужно тоже склонировать
//
// Например: let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }; // есть такой объект
// let cloneSomeObj = deepClone(someObj); // создаем его копию
// cloneSomeObj -> { name: 'Petya', metrics: { weight: 80, height: 180 } }; // копия повторяет структуру первоначального объекта
// cloneSomeObj === someObj // false при сравнении копия и первоначальный объект не равны
// cloneSomeObj.metrics === someObj.metrics // false при сравнении вложенного объекта они тоже не равны

// ========================= Решение задачи 2 ========================= //

let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } };

function deepClone (someObj) {

let clone = {};

    for (let key in someObj) {
        const value = someObj[key];

        if (typeof(value) === 'object' && value !== null) {
            clone[key] = deepClone(value);
    
        } else if (value !== undefined) {
            clone[key] = value;
        }
    }
    return clone;
}   

let cloneSomeObj = deepClone(someObj);
console.log(cloneSomeObj);
console.log(cloneSomeObj === someObj);
console.log(cloneSomeObj.metrics === someObj.metrics);


// 3)
// напишите функцию merge для объединения объектов НЕ используя встроеный метод Object.assign
// колличество передаваемых аргументов в функцию НЕ ограничено (вложенные объекты копируются по ссылке)
// 
// Например:
// let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
// unionObject -> { name: 'Vasya', age: 45, isAdmin: true }

// ========================= Решение задачи 3 ========================= //

function merge (...args) {

    let newObject = {};

    args.forEach((element) => {
        if (Object.keys(element) == "" || typeof(element) !== 'object') {
            args.splice(args.indexOf(element), 1);
        }
    });

    args.forEach((element) => {
       for (let key in element) {
           newObject[key] = element[key];
       }
    });

    //Object.assign(newObject, args);

    return newObject;
}

console.log(merge({}, { name: 'Vasya' }, {}, { age: 45 }, { isAdmin: true }, {age: 40}));


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

// ========================= Решение задачи 4 ========================= //

let dog = {
    name: 'Bobik',
    bark: function(count = 1) {
        let array = [];
        for (let i = 1; i <= count; i++) {
            array.push('bark');
        }
        return this.name + ": " + array.join(" ");
    },
};
console.log(dog.bark(4));


// 5)
// Есть объект товара item = { label: 'phone', price: 500, currency: '$' };
// сделайте так, чтобы при преобразовании данного объекта
// к строке возвращалась строка => "500$",
// а при преобразовании к числе возвращалось просто 500
// обратите внимание, что 500 и $ это значения полей самого объекта (если их поменять то это будет учитываться при последующих преобразованиях)

// ========================= Решение задачи 5 ========================= //

let item = {
    label: 'phone',
    price: 500,
    currency: '$',

    [Symbol.toPrimitive](type) {
      return type === "string" ? this.price + this.currency : this.price;
    }
};

console.log(String(item));
console.log(+item);
console.log('' + item);



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

// ========================= Решение задачи 6 ========================= //

function Dog (name, age, breed, weight, height) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.weight = weight;
    this.height = height;
    this.position = 'relax';
    this.status = 'free';

    this.bark = function() {
        this.name + ": bark";
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

function creatPackOfDogs () {
    let packOfDogs = [];

    for (let i = 0; i < 2; i++) {
        let name = prompt("Введите имя собаки");
        let age = prompt("Введите возраст собаки");
        let breed = prompt("Введите породу собаки");
        let weight = prompt("Введите вес собаки");
        let height = prompt("Введите рост собаки");

        let dog = new Dog(name, age , breed, weight, height);
        packOfDogs.push(dog);
    }
    return packOfDogs;
}

let newPack = creatPackOfDogs();
console.log(newPack);

