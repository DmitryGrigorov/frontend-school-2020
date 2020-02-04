class Animal {
    movingType = '';
    color = '';
}
class Dog extends Animal {
    constructor(movingType, color, name, age, weight) {
        super(movingType, color, name, age, weight);
        this.movingType = movingType;
        this.color = color;
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
}

const someDog = new Dog('walking', 'black', 'tuzik', 4, 10);
console.log(someDog.movingType);
console.log(someDog.color);
console.log(someDog.name);
