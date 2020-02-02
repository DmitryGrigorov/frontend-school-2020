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

    function calculate (name, quantity, obj) {
        if (!(name in obj))  {
            return 'Такого товара у нас еще нет!';
        } else if(obj[name] === undefined) {
            return 'Извините, товар закончился!';
        } else {
            return obj[name] * quantity;
        }
    };

    console. log(calculate('potato', 1, { apple: 100, pear: 500, melon: 400, lemon: undefined }));  // Такого товара у нас еще нет!
    console.log(calculate('lemon', 2, { apple: 100, pear: 500, melon: 400, lemon: undefined })); // Извините, товар закончился!
    console.log(calculate('pear', 4, { apple: 100, pear: 500, melon: 400, lemon: undefined })); // 2000
// 2)
// напишите функцию deepClone глубокого клонирования объекта, которая создаёт глубокую копию объекта
// * - глубокая копия - это значит, что если внутри объекта есть свойства объекты - их нужно тоже склонировать
//
// Например: let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }; // есть такой объект
// let cloneSomeObj = deepClone(someObj); // создаем его копию
// cloneSomeObj -> { name: 'Petya', metrics: { weight: 80, height: 180 } }; // копия повторяет структуру первоначального объекта
// cloneSomeObj === someObj // false при сравнении копия и первоначальный объект не равны
// cloneSomeObj.metrics === someObj.metrics // false при сравнении вложенного объекта они тоже не равны
    
    function deepClone(someObj) {
        let cloneSomeObj = [];
        for(let key in someObj) {
            if(typeof someObj[key] === 'object') {
                cloneSomeObj[key] = deepClone(someObj[key]);
            } else {
                cloneSomeObj[key] = someObj[key];
            }
        }
        return cloneSomeObj;
    }
  
    let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } };
    let cloneSomeObj = deepClone(someObj);
    
    console.log(someObj);
    console.log(cloneSomeObj);
    console.log( cloneSomeObj === someObj);
    console.log(cloneSomeObj.metrics === someObj.metrics);

// 3)
// напишите функцию merge для объединения объектов НЕ используя встроеный метод Object.assign
// колличество передаваемых аргументов в функцию НЕ ограничено (вложенные объекты копируются по ссылке)
//
// Например:
// let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
// unionObject -> { name: 'Vasya', age: 45, isAdmin: true }

    function merge(obj, ...param) {
        param.forEach(element => {
            for (let key in param) {
                obj[key] = param[key];
            }
        });

        return obj;
    };

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
        bark: function(count) {
            let str = this.name + ':' + ' bark';
            if (count) {
                for (let i = 1; i < count; i++) {
                    str += ' bark';
                }
            }
            console.log(str); 
        }
    };
    dog.bark(0);

// 5)
// Есть объект товара item = { label: 'phone', price: 500, currency: '$' };
// сделайте так, чтобы при преобразовании данного объекта
// к строке возвращалась строка => "500$",
// а при преобразовании к числе возвращалось просто 500
// обратите внимание, что 500 и $ это значения полей самого объекта (если их поменять то это будет учитываться при последующих преобразованиях)
    let item = { 
        label: 'phone',
        price: 500, 
        currency: '$' 
    };

    item.toString = function() {
        return this.price + this.currency;
    };

    item.valueOf = function() {
        return this.price;
    };

    console.log(item.toString());
    console.log(item.valueOf());
    console.log(item);


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
    function Dog() {
        this.name = 'Hatiko';
        this.age = 10;
        this.breed = 'Akita-inu';
        this.weight = 15;
        this.height = 60;
        this.position = 'park';
        this.status = 'walking';
        this.bark = function() {
            console.log(this.name + ': bark');
        };
        this.place = function() {
            this.position = 'place';
        };
        this.come = function() {
            this.position = 'here';
        };
        this.goOut = function() {
            this.position = 'go out';
        };
        this.sit = function() {
            this.status = 'sitting';
        };
        this.stand = function() {
            this.status = 'standing';
        };
        this.down = function() {
            this.status = 'lying';
        };
    }
    
    let dogs = [];

    function createDog(arr, count) {
        for (let i = 0; i < count; i++) {
        arr[i]= new Dog();
        };
        return arr;
    };

    console.log(createDog(dogs, 25));
        
    



