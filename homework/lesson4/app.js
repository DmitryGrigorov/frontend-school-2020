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

function calculate(article='', count=0, pricelist={}){
    let price = pricelist[article];
    let response = '';

    switch(true){
        case !(article in pricelist):
            response = "Такого товара у нас еще нет!";
            break;
        case (price === undefined):
            response = "Извините, товар закончился!";
            break;
        case (price == Number(price)):
            response = price * count;
            break;
        default:
            response = "";
            break;
    }

    alert (response);
}

// calculate('potato', 1, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // Такого товара у нас еще нет!
// calculate('lemon', 2, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // Извините, товар закончился!
// calculate('pear', 4, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // 2000


// 2)
// напишите функцию deepClone глубокого клонирования объекта, которая создаёт глубокую копию объекта
// * - глубокая копия - это значит, что если внутри объекта есть свойства объекты - их нужно тоже склонировать
//
// Например: let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }; // есть такой объект
// let cloneSomeObj = deepClone(someObj); // создаем его копию
// cloneSomeObj -> { name: 'Petya', metrics: { weight: 80, height: 180 } }; // копия повторяет структуру первоначального объекта
// cloneSomeObj === someObj // false при сравнении копия и первоначальный объект не равны
// cloneSomeObj.metrics === someObj.metrics // false при сравнении вложенного объекта они тоже не равны

function deepClone(obj){
    let clone = {};

    for(key in obj){
        if (typeof(obj[key]) === 'object' && obj[key]!=null){
            clone[key] = deepClone(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }

    return clone;
}
let someObj = { name: 'Petya', metrics: { weight: 80, height: 180, volume:null } }; // есть такой объект
let cloneSomeObj = deepClone(someObj); // создаем его копию

// cloneSomeObj.name = 'Vasya';
// cloneSomeObj.metrics.weight = 100;

// console.log(someObj);
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

function merge(...objs){
    if(!objs.length)
        return 'Нужно передать параметры - объекты';

    let merged = {};
    let countObjs = 0;

    do{
        
        if(typeof(objs[countObjs]) === 'object' && objs[countObjs]!=null){
            for(prop in objs[countObjs]){
                merged[prop] = objs[countObjs][prop];
            }
        }

        countObjs++;
    }while(countObjs < objs.length);

    return merged;
}

// let unionObject = merge({country:'Belarus', metrics:{height:180, weight:100,volume:null}}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
// console.log(unionObject);
// console.log(merge());

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

let dog = { name: 'Bobik' };

dog.bark = function(count = 1) {
    console.log(this.name+ ':' + ' bark'.repeat(count));
}
// dog.bark();
// dog.bark(4);

// 5)
// Есть объект товара item = { label: 'phone', price: 500, currency: '$' };
// сделайте так, чтобы при преобразовании данного объекта
// к строке возвращалась строка => "500$",
// а при преобразовании к числе возвращалось просто 500
// обратите внимание, что 500 и $ это значения полей самого объекта (если их поменять то это будет учитываться при последующих преобразованиях)

item = { label: 'phone', price: 500, currency: '$' };
// item.toString = function(){
//     return this.price + this.currency;
// }
// item.valueOf = function(){
//     return this.price;
// }
item[Symbol.toPrimitive]=function(hint){
    return (hint == 'string') ? (this.price + this.currency) : this.price;
}
// alert(item);
// alert(0+item);

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

Dog = function(name){
    this.name     = name;
    this.age      = 2;
    this.breed    = null;
    this.weight   = 10;
    this.height   = 70;
    this.position = '';
    this.status   = '';
    
    this.bark = function(){
        console.log(this.name+': bark');
    }
    
    this.place = function(){
        this.position = 'place';
    }
    
    this.come = function(){
        this.position = 'here';
    }
    
    this.goOut = function(){
        this.position = 'go out';
    }
    
    this.sit = function(){
        this.status = 'sitting';
    }
    
    this.stand = function(){
        this.status = 'standing';
    }
    
    this.down = function(){
        this.status = 'lying';
    }
}

// let Bobik = new Dog('Bobik');
// Bobik.bark();
// Bobik.place();
// console.log(Bobik.position);
// Bobik.come();
// console.log(Bobik.position);
// Bobik.goOut();
// console.log(Bobik.position);
// Bobik.sit();
// console.log(Bobik.status);
// Bobik.stand();
// console.log(Bobik.status);
// Bobik.down();
// console.log(Bobik.status);
// console.log(Bobik);

let dogNames = ['Aidan', 'Conor', 'Angus', 'Dermot', 'Dinsmore', 'Bran', 'Brady', 'Harry', 'Alfie', 'Oliver', 'Cedric', 'Gordon', 'Griffin', 'Colin', 'Coby', 'Norris', 'Ian', 'Inis', 'Pierce', 'Riley', 'Rogan', 'Kent', 'Romney', 'Seamus', 'Shane']; //25 names of dogs in UK

let dogs = [];

for(i = 0; i < dogNames.length; i++)
    dogs[dogNames[i]] = new Dog(dogNames[i]);

console.log(dogs);