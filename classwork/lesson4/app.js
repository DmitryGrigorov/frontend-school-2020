// создание объектов, добавление/удаление свойств *
<<<<<<< HEAD
//let someObject = new Object();
let user = {
    prop1:100,
    prop2: 'hello',
    return: 'ggg'
}
user.name='Nick';
delete user.prop1;
console.log(user);
=======
// let someObject = new Object();

// let user = {
//     prop1: 100,
//     prop2: 'hello',
//     return: 'wqr'
// };

// user.name = 'Nick';

// delete user.prop;

// console.log(user.asdfasd);

>>>>>>> 244732f38df51a85a2730ada20128bf85749b76e

// имя свойства из нескольких слов, квадратные скобки для доступа к ним

let car={
    'max speed': 200
}
//console.log(car['max speed']);
//let key1 ='max ';
//let key2 ='speed';
//console.log(car[key1+key2]);

<<<<<<< HEAD

// вычисляемые свойства[], свойства из переменных
let key1 = 'current ';
let key2 = 'speed'
let car2={
    [key1 + key2]:123,
}
car2['some'+'prop'] = 'someprop';
console.log(car2);
// проверка существования свойств

let item = {
    label: 'orange',
    price: 500,
    age: undefined //не можем отличить значение undefined от свойства которого не сущкствует
}
console.log(item.label);
console.log(item.age);//undefined
console.log('age' in item) // in - возвращает true если свойство есть
=======
// let car = {
//     'max speed': 200
// };

// let key1 = 'max ';
// let key2 = 'speed';

// console.log(car[key1 + key2]);

// вычисляемые свойства[], свойства из переменных

// let key1 = 'current';
// let key2 = 'Speed';
// let car2 = {
//     [key1 + key2]: 123
// };

// car2['some' + 'Prop'] = 'hello world';

// console.log(car2);

// проверка существования свойств

// let item = {
//     label: 'orange',
//     price: 500,
//     age: undefined
// };

// console.log(item.label);

// console.log(item.age === undefined);
// console.log('some' + 'Prop' in item);

>>>>>>> 244732f38df51a85a2730ada20128bf85749b76e
// цикл for..in
let someObject={
    someProp1: 'bk',
    someProp2: 500,
    1234: 123
}
for(let key in someObject){
    console.log(key);
    console.log(someObject[key]); //не через .key - тогда будет свойство key, а вычисляем
}

// let someObject = {
//     '2345': 'werty',
//     someProp2: 500
// };

// for(let key in someObject) {
//     console.log(key, ': ', someObject[key]);
// }

// копирование по ссылке
let str1 = 'hello world';
let str2 = str1; //копируем первую во вторую
str1=str1+'!!!'; //str2 не меняется

console.log(str1);
console.log(str2);

let car3 = {
    model: 'bmw',
    color: 'black'
} // в переменной лежит ССЫЛКА на обект, массивы так же
let car4=car3;//тот же самый объект
car3.speed = 100;//свойсво появится у car3 и car4
console.log(car4); 

//  let str1 = 'hello world';
//  let str2 = str1;

//  str1 = str1 + '!!!!!!!';

// console.log(str1);
// console.log(str2);

// let car1 = {
//     model: 'bmw',
//     color: 'black'
// };

// let car2 = car1;

// car1.speed = 100;

// console.log(car2);

// сравнение объектов
let obj1={};
let obj2={};
let obj3 = obj1;
console.log(obj1===obj2);//== и === работает одинаково
//объекты не равны, так как ссылаются на разные объекты
console.log(obj1===obj3); //один объект


// let obj1 = {};
// let obj2 = {};
// let obj3 = obj1;

// console.log(obj1 == obj1);

// клонирование и объединение объектов
function clone(obj){
    let cloneObj={};
    for (let prop in obj){
        cloneObj[prop]=obj[prop];//закидываем в новый те же свойства
    }
    return cloneObj;
}
let car5={
    model: 'renault',
    color: 'blue'
}
let cloneCar5=clone(car5);
car5.speed = 40;
//console.log(car5); //свойство добавили только сюда
//console.log(cloneCar5);



//глубокая фильтрация - то есть удаляем свойства обхектов в объекте
const metr2={};
const metr3={};
var user1= {
    name: 'Vova',
    metrics: { //много уровней вложенности
        h: 120,
        w: 140
    },
    metr2: metr2, //ссылкка на объект
    metr3 //сокращаем если совпадает имя
}
let cloneUser = clone(user);
//console.log(user);
//console.log(cloneUser); //объекты metrics по ССЫЛКЕ!
//console.log(user.metrics == cloneUser.metrics); //true это один и тот же объект!!!

function filter(obj){
    for (let key in obj){
        if (obj[key] === undefined){ //нельзя == тк undefined == null и удалим еще и свойство где null
            delete obj[key]; 
        }
    }
}
let car6 ={
    'prop': undefined,
    model: '', 
    speed: null
}
//console.log(car6);
filter(car6);
//console.log(car6);


function filterWithClone(obj){
    let clone = {};
    for (let key in obj){
        if (obj[key] === undefined){ //нельзя == тк undefined == null и удалим еще и свойство где null
            clone[key] = obj[key]; 
        }
        return clone;
    }
}

function deepClone(obj){
    let clone = {};
    for (let key in obj){
        const value = obj[key];
        if (typeof(value) === 'Object' && value !== null){
            clone[key] = deepClone(value);
        }  else if(value !== 'undefined'){
            clone[key] = value;

        }
    }
    return clone;
}
let car7 ={
    color: 'black',
    m: null,
    someProp:{
        prop1: 'ридлор',
        prop2: undefined
    }
}
let car8 = deepClone(car7);
console.log(car7);
console.log(car8);

//spread and ret operators

function someFunction (a, b, c, d, e){
    console.log([a, b, c, d, e]);
}
someFunction(1,2,3,4,5,6,7);//обработает только 5 аргументов, даже если их больше
//rest -собрать
function someFunction2 (first, second, ...allParams){
    console.log(allParams);
}
someFunction2(1,2,3,4,5,6,7); //1 и 2 попали в first и second, allParams-все остальные
//spread - распределить
function someFunction3 (first, second, ...rest){
    console.log(rest); //массив
    console.log(...rest);//развернули значения из массива, просто значения
    console.log(rest[0], rest[1], rest[2]); //то же самое что и  ...rest

    //использование
    someFunction4(...rest);//потому что функция ожидает не массив, а несколько аргументов
}
someFunction3(1,2,3,4,5,6,7);

function someFunction4(a, b, c){
    
}

//clonepart
function clonePart(obj, ...keys){
    let clone = {};
    for (let key in obj){
        if(keys.includes(key)){
            clone[key]= obj[key];
        }
    }
    return clone;
}
console.log(clonePart({ type: 'success', message: 'text-text', authorId: 'qwerty' }, 'message', 'authorId')); // вернет новый объект => { message: 'text-text', authorId: 'qwerty' }




// function clone(someObj) {
//     let cloneObj = {};

//     for (let prop in someObj) {
//         cloneObj[prop] = someObj[prop];
//     }

//     return cloneObj;
// }

// let car1 = {
//     model: 'renault',
//     color: 'blue'
// };

// let cloneCar1 = clone(car1);

// car1.speed = 40;

// console.log(car1);
// console.log(cloneCar1);

// const metrics = {
//     height: 120,
//     weight: 140
// };

// let user = {
//     name: 'Vova',
//     metrics
// }

// let cloneUser = clone(user);

// console.log(user);
// console.log(cloneUser);

// function filter(obj) {
//     for (let key in obj) {
//         if(obj[key] === undefined) {
//             delete obj[key];
//         }
//     }
// }

// function filterWithClone(obj) {
//     let clone = {};

//     for (let key in obj) {
//         const value = obj[key];

//         if (typeof(value) === 'object' && value !== null) {
//             clone[key] = filterWithClone(value);
//         } else if (value !== undefined) {
//             clone[key] = value;
//         }
//     }

//     return clone;
// }

// let car = {
//     color: undefined,
//     speed: null,
//     model: '',
//     key: 'qwertyu',
//     someProp: {
//         prop1: 'qwerty',
//         prop2: undefined
//     }
// };

// console.log(filterWithClone(car));

// filter(car);
// console.log(car);
// let key = 'color';
// car[key]; // car['color']
// car['color']; // car.color;

// function someFunction(...rest) {
//     someFunction2(...rest);
// }

// function someFunction2(a, b, c) {
//     console.log('someFunction2: ', a);
//     console.log('someFunction2: ', b);
//     console.log('someFunction2: ', c);
// }

// someFunction(1, 2, 3, 4, 5, 6);

function clonePart(obj, ...keys) {
    const clone = {};

    for (let key in obj) {
        if (keys.includes(key)) {
            clone[key] = obj[key];
        }
    }

    return clone;
}

let comment = {
    type: 'success',
    message: 'text-text',
    authorId: 'qwerty'
};
let cl = clonePart(comment, 'message', 'authorId'); 

/**
 * написать функцию filter которая принимает в качестве аргумента любой объект
 * и удаляет в нем свойства, значение которых = undefined
 * 
 * 
 * Например: filter({ color: 'black', model: 'mercedes', speed: undefined }); // { color: 'black', model: 'mercedes' }
 * как сделать так, чтобы функция возвращала новый объект? - функция clone 
 * как сделать глубокую фильтрацию свойств объекта?
 * 
 * написать функцию clone, которая принимает в качестве аргумента объект и возвращает новый объект с такой же структурой
 * Например:
 * const nick = { name: 'Nick', age: 20 };
 * const notNick = clone(nick);
 * console.log(nick === notNick); // false
 * 
 * написать функцию clonePart которая принимает первым аргументом объект, а последующими - строки (колличество аргументов не ограничено)
 * clonePart должна вернуть новый объект со свойствами которые совпадают со значениями аргументов функции
 * Например:
 * clonePart({ type: 'success', message: 'text-text', authorId: 'qwerty' }, 'message', 'authorId'); // вернет новый объект => { message: 'text-text', authorId: 'qwerty' }
 */

// методы объекта, cокращённая запись метода *
let age= 44;
let userBob ={
    name: 'Bob',
    age,
    sayHello: function(){
        console.log('Hello!');
    },
    sayHi(){ //сокращенный
        console.log('Hi! ', this.name); //Hi! Bob
    }
}
userBob.sayHello();
userBob.sayHi();

// let age = 44;

// let user = {
//     name: 'Bob',
//     age,
//     sayHello: function() {
//         console.log('Hello!');
//     },
//     sayHi() {
//         console.log('Hi ' + this.name);
//     }
// };

// let foo = user.sayHi;

// foo();

// Ключевое слово «this» в методах *

// потеря this - ссылочный тип

<<<<<<< HEAD
//!! надо знать для собеседования
=======


>>>>>>> 244732f38df51a85a2730ada20128bf85749b76e
// преобразование объектов в примитивы string, number, default *
let someObj = {};
console.log(String(someObj)); //[object Object]

let someObj2 = {
    [Symbol.toPrimitive](type){
        switch(type){
            case 'string':
                return 'this is string';
            case 'number':
                return 'this is number';
               // case default

        }
    }
}
console.log(String(someObj2)); //this is string

//старый метод 
let someObj3={
    toString(){
        return 'Hello'
    }, //вернет если преобразовывать к строке
    valueOf(){} //вернет undefined
}
console.log(String(someObj3));






// let someObj = {
//     [Symbol.toPrimitive](type) {
//         switch(type) {
//             case 'string':
//                 return 'this is string';
//             case 'number':
//                 return 123456;
//             case 'default':
//                 return 'this, is default';
//         }
//     }
// };

// let simeObj2 = {
//     age: 5000,

//     toString() {
//         return this.age;
//     },
//     valueOf() {
        
//     }
// };

// console.log(String(simeObj2));
// console.log(Number(simeObj2));
// console.log('!!!'+ simeObj2);
// console.log(simeObj2.toString());

// Конструкторы, создание объектов через "new" *

<<<<<<< HEAD
let o = {};
let a = new Object();

function createCar (){
    let obj = {};
    obj.model = "honda";
    obj.speed = 100;
    return obj;

    
    
}


let car9 = createCar();
console.log('car', car9);

function Car(){ //конструкторы с большой буквы
    //упростили
    this.model = "honda";
    this.speed = 100;
    this.state="stop";
    // без return
    this.run = function(){ //так можно но не делают
        this.state = "run";
    }
    if(new.target){
        
    } //равна функции, если через new, undefined-если нет
}
let car10=new Car();

//задачи

let car11 = { state: 'stopped', model: 'ГАЗ' };
car11.run = function(){
    this.state='running';
}
car11.stop = function(){
    this.state='stopped';
}


let item1 ={
    label: 'kettle', power: 1300,
    [Symbol.toPrimitive](type) {
        return type === 'string'
        ? `$(this).label  - $(this).power` ///???
        : this.power;
    }
}
console.log(String(item1));

function Cat(name){
    this.name = name;
    this.state = 'lying';
    this.color = "res";
    
    this.meow = function(){
        console.log(this.name + "мяу");
    };

    this.down=function(){
        this.state= 'standing'
    };

}
let cat =  new Cat('tuzik');
=======
// let o = {

// };

// function Car() {
//     // let obj = {}; => this

//     // if (!new.target) {
//     //     return new Car();
//     // }

//     this.model = 'honda';
//     this.speed = 180;
//     this.state = 'stopped';

//     this.run = function () {
//         this.state = 'running';
//     }

//     this.stop = function() {
//         this.state = 'stopped';
//     }

//     // return obj; this
// }

// let car = new Car();
// let car2 = new Car();
// let car3 = new Car();
// let car4 = new Car();

// console.log('car: ', car);

// let car = {
//     state: 'stopped',
//     model: 'ГАЗ'
// };

// car.ran = function() {
//     this.state = 'running';
// }

// car.stop = function() {
//     this.state = 'stopped';
// }

// console.log(car);
// car.ran();
// console.log(car);
// car.stop();
// console.log(car);


// let item = {
//     label: 'kettle',
//     power: 1300,
//     [Symbol.toPrimitive](type) {
//         return type === 'string'
//          ? `${this.label} - ${this.power} watt`
//          : this.power;
//     }
// };

// console.log(String(item));
// console.log(+item);
// console.log('' + item);

// function Cat(name) {
//     this.name = name;
//     this.state = 'lying';
//     this.color = 'red';

//     this.meow = function() {
//         console.log(this.name + ': meow');
//     };

//     this.up = function() {
//         this.state = 'standing';
//     }

//     this.down = function() {
//         this.state = 'lying';
//     };
// }

// let cat = new Cat('tuzik');

// console.log(cat);
// cat.meow();
// cat.up();
// console.log(cat);
// cat.down();
// console.log(cat);
>>>>>>> 244732f38df51a85a2730ada20128bf85749b76e

/**
 * есть объект car = { state: 'stopped', model: 'ГАЗ' }
 * добавьте метод run(); при вызове которого state должно меняться на running
 * добавьте метод stop(); при вызове которого state должно меняться на stopped
 * 
 * есть объект item = { label: 'kettle', power: 1300 }
 * cделать так чтобы при преобразовании объекта к числу возвращалось поле power
 * а при преобразовании к строке - строка вида "kettle - 1300 watt"
 * 
 * написать конструктор Cat которой создает объекты со свойствами name, state, color
 * и методами
 * 
 * cat.meow(); // => выводит в консоль "{{имя_кошки}}: meow"
 * cat.down(); // меняет свойство state на строку 'lying'
 * cat.up(); // меняет свойство state на строку 'standing'
 */
