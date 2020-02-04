// Класс базовый синтаксис

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// // function Person(name) {
// //     this.name =name;
// // }

// let misha = new Person('Misha');

// console.log(misha);

// Наследование классов и super

class Person {
    constructor(options) {
        this.name = options;
    }
    sayHi () {
        console.log(`Hi ${this.name}`);
    }
}

let misha = new Person('Misha');
misha.sayHi();

class Child extends Person {
    constructor(options) {
        super(options);
        this.age = options.age;
    }

    ageInfo() {
        console.log('age: ' + this.age)
    }
}


// Проверка класса: instaceof

// геттеры и сеттеры

// Примеси Object.assign
