function Dog(name, age, breed, weight, height, position, status) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.weight = weight;
    this.height = height;
    this.position = position;
    this.status = status;
    this.bark = function () {
        console.log(`${this.name}: bark`);
    };
    this.place = function () {
        this.position = 'place';
    };
    this.come = function () {
        this.position = 'here';
    };
    this.goOut = function () {
        this.position = 'go out';
    };
    this.sit = function () {
        this.status = 'sitting';
    };
    this.stand = function () {
        this.status = 'standing';
    };
    this.down = function () {
        this.status = 'lying';
    };
};


let dog = new Dog;
dog.name = 'Bobik';
dog.age = 12;
dog.breed = 'Shepherd';
dog.weight = 32;
dog.height = 32;

console.log(dog);
// dog.bark() => Выводит в консоль '{{имя собаки}}: bark';
console.log(dog.bark());

// dog.place() => Меняет свойство position на строку 'place';
dog.place();
console.log(dog.position);

// dog.come() => Меняет свойство position на строку 'here';
dog.come();
console.log(dog.position);

// dog.goOut() => Меняет свойство position на строку 'go out';
dog.goOut();
console.log(dog.position);

// dog.sit() => Меняет свойство status на строку 'sitting';
dog.sit();
console.log(dog.status);

// dog.stand() => Меняет свойство status на строку 'standing';
dog.stand();
console.log(dog.status);

// dog.down() => Меняет свойство status на строку 'lying';
dog.down();
console.log(dog.status);

let Dogs=[];
for (let i=0; i<25; i++){
    let dog = new Dog(`name${i}`, `age${i}`, `breed${i}`,  `weight${i}`, `height${i}`, `position${i}`, `status${i}`)
    Dogs.push(dog);
}
console.log(Dogs);