// 1)
// напишите функцию calculate которая принимает 3 аргумента:
// 1 - наименование товара,
// 1 - количество товаров,
// 2 - объект с ценами, например: prices = { apple: 100, pear: 500, melon: 400, lemon: undefined };
// Если при вызове функции передать товар которого НЕТ в прайс листе, 
//она должна вернуть "Такого товара у нас еще нет!";

// Если при вызове функции передать товар который есть в прайс листе 
//но его цена = undefined, то функция должна вернуть "Извините, товар закончился!"

// Если при вызове функции передать товар который есть в прайс листе и у него есть 
//цена, то посчитать итоговую цену и вернуть её
// Например:
// calculate('potato', 1, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // Такого товара у нас еще нет!
// calculate('lemon', 2, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // Извините, товар закончился!
// calculate('pear', 4, { apple: 100, pear: 500, melon: 400, lemon: undefined }); // 2000

// function calculate (title, numb, object) {
 
//     if (title in object) {
//      return numb*object[title];
     
//      } else if (!(title in object)) {
//       return "Такого товара у нас еще нет!" ;     
//    }      
//    if (object.title === undefined) {
//          return "Извините, товар закончился!"; // NaN !!!
//     }   
// }

// alert(calculate('potato', 1, { apple: 100, pear: 500, melon: 400, lemon: undefined })); // Такого товара у нас еще нет!
// alert(calculate('lemon', 2, { apple: 100, pear: 500, melon: 400, lemon: undefined })); // NaN  !!!
// alert(calculate('pear', 4, { apple: 100, pear: 500, melon: 400, lemon: undefined })); // 2000
// alert(calculate('apple', 5, { apple: 100, pear: 500, melon: 400, lemon: undefined })); // 500
// alert(calculate('melon', 10, { apple: 100, pear: 500, melon: 400, lemon: undefined })); // 4000

//_____________________________________________________

/* // Окончательное решение.

  function calculate (title, numb, object) {
 
    if (!(title in object)) {
       return  "Такого товара у нас еще нет!" ;     
    } else {
     return (object[title] !== undefined) ? numb*object[title] : "Извините, товар закончился!" ;
    } 
   }

  alert(calculate('potato', 1, { apple: 100, pear: 500, melon: 400, lemon: undefined })); // Такого товара у нас еще нет!
  alert(calculate('lemon', 2, { apple: 100, pear: 500, melon: 400, lemon: undefined })); // Извините, товар закончился!
  alert(calculate('pear', 4, { apple: 100, pear: 500, melon: 400, lemon: undefined })); // 2000
  alert(calculate('apple', 5, { apple: 100, pear: 500, melon: 400, lemon: undefined })); // 500
  alert(calculate('melon', 10, { apple: 100, pear: 500, melon: 400, lemon: undefined })); // 4000
*/



// 2)
// напишите функцию deepClone глубокого клонирования объекта, которая создаёт глубокую копию объекта
// * - глубокая копия - это значит, что если внутри объекта есть свойства объекты - их нужно тоже склонировать
//
// Например: let someObj = { name: 'Petya', metrics: { weight: 80, height: 180 } }; // есть такой объект
// let cloneSomeObj = deepClone(someObj); // создаем его копию
// cloneSomeObj -> { name: 'Petya', metrics: { weight: 80, height: 180 } }; // копия повторяет структуру первоначального объекта
// cloneSomeObj === someObj // false при сравнении копия и первоначальный объект не равны
// cloneSomeObj.metrics === someObj.metrics // false при сравнении вложенного объекта они тоже не равны

//  Решение.
/*
    let someObj = { 
        name: 'Petya', 
        metrics: { 
           weight: 80, 
           height: 180 
        } }; 
    function deepClone(obj) {
        let clone  = {};
        for (let key in obj) {
            const value = obj[key];
            if (typeof(value) === 'object' && value !== null) {      // вместо if можно : clone[key] = (typeof(value) === 'object' && value !== null) ? deepClone(obj) : value;    
             clone[key] = deepClone (value);
            }     
        }
        return clone;     
    }
    let cloneSomeObj = deepClone(someObj); // создаем его копию

    alert(cloneSomeObj === someObj); // false при сравнении копия и первоначальный объект не равны
    alert(cloneSomeObj.metrics === someObj.metrics); // false при сравнении вложенного объекта они тоже не равны
    
*/



// 3)
// напишите функцию merge для объединения объектов НЕ используя встроеный метод Object.assign
// колличество передаваемых аргументов в функцию НЕ ограничено (вложенные объекты копируются по ссылке)
// 
// Например:
// let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
// unionObject -> { name: 'Vasya', age: 45, isAdmin: true }
// let obj1 = {};
// let obj2 = {
//     name: 'Vasya',
// };
// let obj3 = {
//     age: 45,
// };
// let obj4 = {
//     isAdmin: true,
// }

/*
    function merge (...rest) {  //оператор rest для соединения отдельных значений в массив
       const clone = {};
       for (let i=1; i<rest.length; i++) {

           if (rest[i] !== null) {

                for (let key in rest[i]) {
                    clone[key] = rest[i][key];
                }
            }
        }
        return clone;
    } 
    let unionObject = merge({}, { name: 'Vasya' }, { age: 45 }, { isAdmin: true });
    console.log(unionObject); // { name: 'Vasya', age: 45, isAdmin: true }

*/

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

/*
    dog = { 
        name: 'Bobik' 
    };
    dog.bark = function (number) {
        let say = ': bark';
        for (let i=1; i<number; i++) {
            say = say + ', bark';
        }
        return this.name + say;
    }
    console.log(dog.bark(4)); // => "Bobik: bark, bark, bark, bark"
    console.log(dog.bark()); // => "Bobik: bark" если аргумент не передать - метод все равно сработает

*/

// 5)
// Есть объект товара item = { label: 'phone', price: 500, currency: '$' };
// сделайте так, чтобы при преобразовании данного объекта
// к строке возвращалась строка => "500$",
// а при преобразовании к числе возвращалось просто 500
// обратите внимание, что 500 и $ это значения полей самого объекта (если их поменять то это будет учитываться при последующих преобразованиях)


/*
       // Решение 1.

    let item = { 
        label: 'phone', 
        price: 500, 
        currency: '$', 
        [Symbol.toPrimitive](type) {
            return type === 'string' ? `${this.price}${this.currency}` : this.price;
        }
    };
    alert(String(item));
    alert(+item);
*/
    // __________________________________________________

       // Решение 2.
/*
    item = { 
        label: 'phone', 
        price: 500, 
        currency: '$', 
    };
    item.toString = function () {
        return this.price + this.currency;
    } 
    item.valueOf = function () {
        return this.price;
    } 

    alert(String(item));
    alert(Number(item));
*/
 
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

    function Dog(name) {
        this.name = name;
        this.age = 3;
        this.breed = 'aussie';
        this.weight = 60;
        this.height = 50;
        this.position = 'home';
        this.status = 'standing';
     
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
    
    let dog = [];
    for (i = 0; i < 25; i++ ) {
        dog[i] = new Dog(i);
    }

    console.log(dog);
   

    

    

   

    

