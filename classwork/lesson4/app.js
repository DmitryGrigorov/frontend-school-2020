// Оюъекты.

let empty = {};

let point = { x: 0, y: 0 };

let p2 = { x: point.x, y: point.y };

const { x, y } = point;

let p3 = { someX: x, y };

// console.log(p3);

let book = {
    "main title": "Javascript",
    "sub-title": "The Definitive Guide",
    author: {
        firstname: "David",
        lastname: "Flanagan"
    },

    for: "all"
};

// console.log(book["main title"]);

// console.log(book.author);

let o = new Object();
let a = new Array();
let d = new Date();


const object2 = {
    a: 1,
    b: 2,
    toString: function() {
        return `${this.a} + ${this.b} = ${this.a + this.b}`;
    }
};

// console.log(object2.toString());

const object3 = {
    a: 5,
    b: 6,
    toString: object2.toString
}

// console.log(o);
// console.log(object2);
// console.log(object3)

// console.log(object2.toString());
// console.log(object3.toString());

object3.newProperty = "NewProperty";
object3.newObj = {a: 123}

// console.log(object3);

delete object3.newObj;
delete object3.toString;
delete object3.newProperty;

// console.log(object3);

// Расширение объектов 

const obj1 = {
    a: 1,
    b: 2,
}

const obj2 = {
    c: 3,
    d: 4
};

const obj3 = {
    ...obj1,
    ...obj2,
    abc: "123"
};

const obj4 = Object.assign({}, obj1, obj2, obj3);

// console.log(Object.entries(obj2));

// console.log(JSON.stringify(obj1));

const strObj = JSON.stringify(obj1);

// console.log(JSON.parse(strObj));


// Конструкторы this

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.output = () => console.log(name, age)
};

const person = new Person('Ivan', 23);
const person2 = new Person('Sasha', 28);
person.output()
person2.output()

const newObject = {a:1, b:2}

console.log(person);
console.log(person2);
console.log(newObject);

const withoutPrototypes = Object.create(null);

console.log(withoutPrototypes);