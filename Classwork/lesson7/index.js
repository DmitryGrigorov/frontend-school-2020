class Person {
    static information = 'INFO';

    constructor(options) {
        this.name = name;
    }
    sayHi() {
      console.log("Hi ${this.name}");
    }
}

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
}
let jack = new Child({
    name: 'Jack',
    age: 30
});
// console.log(jack);
// jack.ageInfo = 50;
// console.log(jack.getInfo);

class Officer extends Person {
    constructor(options) {
        super(options);
        this.hasGun = options.hasGun;
        this.hasBadge = options.hasBadge;
    }

    getInfo() {
        console.log('name: '+this.name, 'hasGun: '+this.hasGun,'hasBadge: '+this.hasBadge);
    }
}

let Bob = new Officer({
    name: 'Bob',
    hasBadge: true,
    hasGun: true
});
// Bob.getInfo();
// console.log(Officer.information);
// console.log(Child.information);

console.log(Bob instanceof Officer);
console.log(Bob instanceof Person);


const methods = {
    go() {
        console.log('go');
    },
    jump() {
      console.log('jump');
    }
}

Object.assign(Person.prototype, methods);
jack.jump();
jack.go();
