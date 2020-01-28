// let user = {
//   name: "Sergey",
//   prop1: 100,
//   prop2: "Hello",
// }
//
// // let car = {
// //   maxSpeed: 200
// // }
// //
// // let key1 = "current ";
// // let key2 = "Speed";
// //
// // let car2 = {
// //   mark: "Ferrari"
// // }
//
// let item = {
//   label: 'orange',
//   price: 500,
//   age: undefined
// }
//
// let someObject = {
//   someProp1: "Hello World",
//   someProp2: 123
// }
//
// // let car1 = {
// //   model: "BMW",
// //   color: "black"
// // }
// // let car2 = car1;
// // car1.speed = 200;
// // console.log(car1.speed);
// // console.log(car2.speed);
//
// function clone(someObj) {
//     let cloneObj = {};
//     for (let prop in someObj) {
//         cloneObj[prop] = someObj[prop];
//     }
//     return cloneObj;
// }
//
// let car1 = {}
// let cloneCar1 = clone(car1);
//
// car1.speed = 50;
// console.log(car1);
// console.log(cloneCar1);



// console.log(item.label);
// console.log(item.price);
// console.log(item.age === undefined);
// console.log('age' in item);

// for (let key in someObject) {
//     console.log(someObject[key]);
// }

////////////////////////////////////////////////////////////////////////////

// function filter(obj) {
//     for (let key in obj) {
//         if (obj[key] === undefined) {
//             delete obj[key];
//         }
//     }
//     console.log(obj);
// }
//
// let someObj = {
//   name: "Vova",
//   age: undefined
// }
//
// filter(someObj);

//
// function clonePart(obj, ...keys) {
//     const clone = {};
//     for (let key in obj) {
//         if (keys.includes(key)) {
//           clone[key] = obj[key];
//         }
//     }
//     return clone;
// }


// let user = {
//     name: "Bob",
//     sayHello: function() {
//       console.log("Hello");
//     },
//     sayHi() {
//       console.log("Hi " + this.name);
//     }
// }
// user.sayHello();
// user.sayHi();

// let someObj = {
//     age: 12345,
//
//     [Symbol.toPrimitive]() {
//         return this.age;
//     }
// };
// console.log(String(someObj));
// console.log(Number(someObj));
// console.log('!!!!!' + someObj);
//
// function Car() {
//     //let obj = {};
//     this.model = "honda";
//     this.speed = 180;
//     //return obj;
// }
//
// let car = new Car();
// console.log('car: ', car);



// let car = {
//   state: "stopped",
//   model: 'Газ',
// };
// car.run = function() {
//   this.state = 'running'
// }
// car.stop = function() {
//   this.state = 'stopped'
// }


// let item = {
//     label: "kettle",
//     power: 1300
//     [Symbol.toPrimitive](type) {
//
//     }
// }

function Cat(name) {
    this.name = name;
    this.state = 'lying';
    this.color = 'red';

    this.meow = function() {
        console.log(this.name + ': ' + 'meow');
    };
    this.up = function() {
        this.state = 'standing';
    };
    this.down = function() {
        this.state = 'lying';
    };
}
let cat = Cat("Tuzic");
console.log(cat);
cat.meow();
cat.up();
