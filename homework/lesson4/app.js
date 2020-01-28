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

function calculate(name, count, obj) {
    let result = false;
    for (let key in obj) {
        if (name === key) {
            result = true;
        }
    }
    if (result === false){
        return 'Такого товара у нас еще нет!'
    } else if (result === true && obj[name] === undefined){
        return 'Извините, товар закончился!'
    } else {
        return obj[name] * count;
    }
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
let someObj = {
    name: 'Petya',
    metrics: { weight: 80, height: 180 }
};

function deepClone(obj) {
    let cloneObj = {};
    for (let key in obj) {
        if (obj[key] instanceof Object) {
            cloneObj[key] = deepClone(obj[key]);
            continue;
        }
        cloneObj[key] = obj[key];
    }
    return cloneObj;
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

function merge(obj, ...args) {
    const result = obj;
    args.forEach(item => {
        for (let key in item) {
            result[key] = item[key];
        };
    });
    return result;
}

let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
console.log(unionObject);

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

let dog = {
    name: 'Bobik',
    bark: function (n = 1) {
        let result = `${this.name}: bark`;
        for (let i = 1; i < n; i++ ) {
            result += ' bark';
        }
        return result;
    }
};

console.log(dog.bark());
console.log(dog.bark(4));


// 5)
// Есть объект товара item = { label: 'phone', price: 500, currency: '$' };
// сделайте так, чтобы при преобразовании данного объекта
// к строке возвращалась строка => "500$",
// а при преобразовании к числе возвращалось просто 500
// обратите внимание, что 500 и $ это значения полей самого объекта (если их поменять то это будет учитываться при последующих преобразованиях)
let item = {
    label: 'phone',
    price: 500,
    currency: '$',
    toString() {
        return `${this.price}${this.currency}`;
    },
    valueOf() {
      return this.price;
    }
};

console.log(String(item));
console.log(Number(item));


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

class Dog {
    constructor(name, age, breed, weight, height, position, status) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.weight = weight;
        this.height = height;
        this.position = position;
        this.status = status;
    }
    bark() {
        console.log(`${this.name}: bark`);
    }
    place() {
        this.position = 'place';
    }
    come() {
        this.position = 'here';
    }
    goOut() {
        this.position = 'go out';
    }
    sit() {
        this.status = 'sitting';
    }
    stand() {
        this.status = 'standing';
    }
    down() {
        this.status = 'lying';
    }
}

let bobik = new Dog('Bobik', 10, 'unknown', 300, 450, 'default', 'default');
bobik.bark();
console.log(bobik);
bobik.place();
console.log(bobik);
bobik.come();
console.log(bobik);
bobik.goOut();
console.log(bobik);
bobik.sit();
console.log(bobik);
bobik.stand();
console.log(bobik);
bobik.down();
console.log(bobik);

function dogArr(arg, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        const age = Math.trunc(Math.random() * 10);
        const width = Math.trunc(Math.random() * 100);
        const height = Math.trunc(Math.random() * 100);
        result.push(new arg(`dog${i}`, age, 'unknown', width, height, 'default', 'default'));
    }
    return result;
}

console.log(dogArr(Dog, 25));



