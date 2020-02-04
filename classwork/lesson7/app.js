<<<<<<< HEAD
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
=======
// 1) Класс базовый синтаксис
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// function Person(name) {
//   this.name = name
// }

// let misha = new Person('misha');
>>>>>>> 4f4fb233de8dfe5f9b59fb549943da9b9ee7135f

// console.log(misha)

// 2) Наследование классов и super

class Person {
  static information = 'INFO';

  constructor(options) {
    this.name = options.name;
  }
  sayHi () {
    console.log(`Hi ${this.name}`);
  }
}

let misha = new Person('misha');
misha.sayHi();

class Child extends Person {
  constructor(options) {
    super(options);
    this.age = options.age;
  }

  get ageInfo() {
    console.log('age: ' + this.age);
    return this.age;
  }

  set ageInfo(newAge) {
    this.age = newAge;
  }

  getAgeInfo() {
    return this.age
  }
}

let jack = new Child({
  name: 'Jack',
  age: 30
})

// console.log(jack);

// console.log(jack.ageInfo);
// jack.ageInfo = 50;
// console.log(jack.ageInfo);
// jack.sayHi();

// 3) геттеры и сеттеры

// 4) статические свойства и методы

class Officer extends Person {
  constructor(options) {
    super(options);

    this.hasGun = options.hasGun;
    this.hasBadge = options.hasBadge;
  }

  getInfo() {
    // console.log('this.information', Officer.information);
    // console.log(
    //   "name:" + this.name,
    //   "hasGun:" + this.hasGun,
    //   "hasBadge:" + this.hasBadge
    // )
  }
}

let Bob = new Officer({
  name: 'Bob',
  hasBadge: true,
  hasGun: true
})



Bob.getInfo();

// console.log(Officer.information);
// console.log(Child.information);


// 5) Проверка класса: instanceof

// console.log('Bob instanceof Officer', Bob instanceof Officer);
// console.log('Bob instanceof Person', Bob instanceof Person);
// console.log('Bob instanceof Object', Bob instanceof Object);
// console.log('Bob instanceof Child', Bob instanceof Child);

// 6) Примеси Object.assign

const methods = {
  go() {
    console.log('go')
  },
  jump() {
    console.log('jump')
  }
}

Object.assign(Person.prototype, methods);

jack.jump();

jack.go();
Bob.go();
