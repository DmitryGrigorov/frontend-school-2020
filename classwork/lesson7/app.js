// Класс базовый синтаксис
// class Person {
//     constructor(name){
//         this.name = name
//     }
// }
// Наследование классов и super

class Person {
    constructor(options){
        this.name = options;
    }
    sayHi () {
        console.log(`Hi ${this.name}`)
    }
}
let misha = new Person('misha');
misha.sayHi;

class Child extends Person {
    constructor (options){
        
        this.age = options.age;
    }

    ageInfo () {
        console.log('age '+ this.age)
    }
}

let jack = new Child

// Проверка класса: instaceof

// геттеры и сеттеры

// Примеси Object.assign
