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

function calculate(name, count, prices) {
    for(product in prices) {
        if(name===product) {
            if (prices[product] === undefined) {
                console.log("Извините, товар закончился!");
            }
            else {
                console.log(prices[product]*count);
            }
            return;
        }
    }
    console.log('Такого товара у нас еще нет!')
}
calculate('potato', 1, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // Такого товара у нас еще нет!
calculate('lemon', 2, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // Извините, товар закончился!
calculate('pear', 4, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // 2000


// 2)
// напишите функцию deepClone глубокого клонирования объекта, которая создаёт глубокую копию объекта
// * - глубокая копия - это значит, что если внутри объекта есть свойства объекты - их нужно тоже склонировать
//
// Например: let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }; // есть такой объект
// let cloneSomeObj = deepClone(someObj); // создаем его копию
// cloneSomeObj -> { name: 'Petya', metrics: { weight: 80, height: 180 } }; // копия повторяет структуру первоначального объекта
// cloneSomeObj === someObj // false при сравнении копия и первоначальный объект не равны
// cloneSomeObj.metrics === someObj.metrics // false при сравнении вложенного объекта они тоже не равны

function deepClone(object) {
    const clone = {};
    for(key in object) {
        if (typeof(object[key])==="object") clone[key] = deepClone(object[key]);
        else clone[key] = object[key];
    }
    return clone;
}

let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }; // есть такой объект
let cloneSomeObj = deepClone(someObj); // создаем его копию
console.log(cloneSomeObj); // { name: 'Petya', metrics: { weight: 80, height: 180 } }; // копия повторяет структуру первоначального объекта
console.log('объекты равны?', cloneSomeObj === someObj); // false при сравнении копия и первоначальный объект не равны
console.log('подъобъекты равны?', cloneSomeObj.metrics === someObj.metrics) // false при сравнении вложенного объекта они тоже не равны

// 3)
// напишите функцию merge для объединения объектов НЕ используя встроеный метод Object.assign
// колличество передаваемых аргументов в функцию НЕ ограничено (вложенные объекты копируются по ссылке)
// 
// Например:
// let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
// unionObject -> { name: 'Vasya', age: 45, isAdmin: true }

function merge(...objects) {
    const merged = objects[0];
    for(let i=1; i<objects.length; i++) {
        for (key in objects[i]){
            merged[key] = objects[i][key];
        }
    }
    return merged;
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

const dog = { name: 'Bobik' };
dog.bark = function (count=1) {
    let out = this.name;
    for (let i = 0; i < count; i++) {
        out+=' bark'
    }
    console.log(out);
};
dog.bark(4); // => "Bobik: bark bark bark bark"
dog.bark();


// 5)
// Есть объект товара item = { label: 'phone', price: 500, currency: '$' };
// сделайте так, чтобы при преобразовании данного объекта
// к строке возвращалась строка => "500$",
// а при преобразовании к числе возвращалось просто 500
// обратите внимание, что 500 и $ это значения полей самого объекта (если их поменять то это будет учитываться при последующих преобразованиях)
const item = { label: 'phone', price: 500, currency: '$' };
item[Symbol.toPrimitive] = function (hint) {
    return hint === "string" ? `${this.price}${this.currency}` : this.price;
};

console.log(+item);
console.log(`${item}`);

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
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.weight = weight;
    this.height = height;
    this.position = position;
    this.status = status;
    this.bark = function () {
        console.log(`${this.name}: bark`)
    };
    this.place = function () {
        this.position = 'place';
    };
    this.come = function () {
        this.position = 'here';
    };
    this.goOut = function () {
        this.position = 'go out';
    };
    this.sit = function () {
        this.status = 'sitting';
    };
    this.stand = function () {
        this.status = 'standing';
    };
    this.down = function () {
        this.status = 'lying';
    };
}

let arr = [new Dog('bobik no 1', 2, 'retriver', 5, 45, 'here', 'standing')];
for (let i = 1; i < 25; i++) {
    arr.push(new Dog('bobik no ' + (i + 1), 2, 'retriver', 5, 45, 'place', 'sitting'))
}
arr[0].bark();
arr[0].place();
arr[2].come();
arr[3].goOut();
arr[0].sit();
arr[4].stand();
arr[5].down();
console.log(arr);
