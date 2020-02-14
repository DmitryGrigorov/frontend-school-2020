class Animal {
    constructor(movingType, color) {
        this.movingType = movingType;
        this.color = color;
    }
}

class Dog extends Animal{
    constructor(name, age, weight, ...args) {
        super(...args);
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
}



const someDog = new Dog('tuzik', 4, 10, 'walking', 'black');
console.log(someDog);