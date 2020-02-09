function Animal(movingType, color ) {
    this.movingType = movingType;
    this.color = color;
}

function Dog(name, age, weight, ...args) {
    Animal.apply(this, args);
    this.name = name;
    this.age = age;
    this.weight = weight;
}
const someDog = new Dog('tuzik', 4, 10, 'walking', 'black');
console.log(someDog);
