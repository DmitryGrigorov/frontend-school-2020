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

function calculate(name, quantity, prices) {
    if (name in prices) {
        if (prices[name] === undefined)
            return 'Извините, товар закончился!';
        else
            return prices[name] * quantity;
    }
    else
        return  'Такого товара у нас ещё нет!';
}

console.log('# 1)');
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

function deepClone(obj) {
    if(typeof(obj) !== 'object') {
        console.log(obj + ' Не является объектом!');
        return;
    }
    let clone = {};
    for (let property in obj){
        if(typeof (obj[property]) === 'object' && obj[property] !== null){
            clone[property] = deepClone(obj[property]);
        } else {
            clone[property] = obj[property];
        }
    }
    return clone;
}
console.log('\n# 2)');
let someObj = {name: 'Petya', metrics: {weight: 80, height: 180}}; // есть такой объект
let cloneSomeObj = deepClone(someObj); // создаем его копию
console.log('someObj:'); console.log(someObj);
console.log('cloneSomeObj:'); console.log(cloneSomeObj);
console.log('cloneSomeObj === someObj: ' + (cloneSomeObj === someObj).toString()); // false при сравнении копия и первоначальный объект не равны)
console.log('cloneSomeObj.metrics === someObj.metrics: ' + (cloneSomeObj.metrics === someObj.metrics).toString()); // false при сравнении вложенного объекта они тоже не равны


// 3)
// напишите функцию merge для объединения объектов НЕ используя встроеный метод Object.assign
// колличество передаваемых аргументов в функцию НЕ ограничено (вложенные объекты копируются по ссылке)
// 
// Например:
// let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
// unionObject -> { name: 'Vasya', age: 45, isAdmin: true }

console.log('\n# 3)');
function merge(...args) {
    let object = {};
    for (let obj of args) {
        for (let prop in obj) {
            object[prop] = obj[prop]; //Прим.: совпадающие свойства в объектах перезаписываются (из крайнего объекта)
        }
    }
    return object;
}
let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true }); //Объединение четырёх объектов
console.log('merge(unionObject): ');
console.log(merge(unionObject)); // { name: 'Vasya', age: 45, isAdmin: true }


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

console.log('\n# 4)');
let dog = {name: 'Bobik'};
dog.bark = function (numberOfTimes) {
    if(numberOfTimes === undefined) numberOfTimes = 1;
    let bark = Array(numberOfTimes + 1 ).join('bark ').trim(); // Создаёт строку длиной в нужное количество "bark"
    console.log(`${this.name}: ${bark}`);
}
console.log('dog.bark(4):')
dog.bark(4); // => "Bobik: bark bark bark bark"
console.log('dog.bark():')
dog.bark(); // => "Bobik: bark" если аргумент не передать - метод все равно сработает


// 5)
// Есть объект товара item = { label: 'phone', price: 500, currency: '$' };
// сделайте так, чтобы при преобразовании данного объекта
// к строке возвращалась строка => "500$",
// а при преобразовании к числе возвращалось просто 500
// обратите внимание, что 500 и $ это значения полей самого объекта (если их поменять то это будет учитываться при последующих преобразованиях)

console.log('\n# 5)');
let item = { label: 'phone', price: 500, currency: '$' };
item[Symbol.toPrimitive] = function (type) {
    if (type === 'string') {
        return `${this.price}${this.currency}`;
    } else if (type === 'number') {
        return this.price;
    }
}
console.log('String(item): ' + String(item));
console.log('Number(item): ' + Number(item));


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
       console.log(`{${this.name}}: bark`)
   }
   this.place = function () {
       this.position = 'place'
   }
   this.come = function () {
       this.position = 'here'
   }
   this.goOut = function () {
       this.position = 'go out'
   }
   this.sit = function () {
       this.status = 'sitting'
   }
   this.stand = function () {
       this.status = 'standing'
   }
   this.down = function () {
       this.status = 'lying'
   }
}

console.log('\n# 6)')
let doggy = new Dog('Скуби-Ду', 1, 'Немецкий дог', 2, 3, 'place', 'standing');
console.log(doggy);
doggy.bark();
doggy.place();
doggy.come();
doggy.goOut();
doggy.sit();
doggy.stand();
doggy.down();

let dogs = [];
for (let i = 0; i < 25; i++){
    dogs.push(new Dog(
        'DogName' + (i + 1),
        i === 0 ? 1 : dogs[i-1].age + 0.5,
        'Пудель',
        5 + i,
        10 + i,
        'place',
        'sitting'))
}
console.log(dogs);