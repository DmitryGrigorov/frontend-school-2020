nameArr = [];
heightArr = [];

class Human {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
        nameArr.push(this.name);
        heightArr.push(this.height);
    }

    getInfo() {
        return this.name + ', ' + this.age + ', ' + height;
    }
    get firstName() {
        return this.name;
    }
    set firstName(newName) {
        this.name = newName;
    }
}

let humans = [
  new Human('Коля', 23, 180),
  new Human('Даша', 19, 170),
  new Human('Ваня', 18, 192),
  new Human('Петя', 45, 178),
  new Human('Вася', 34, 197),
  new Human('Джони', 40, 168),
  new Human('Катя', 37, 160),
  new Human('Петя', 29, 200),
  new Human('Соня', 21, 172),
  new Human('Женя', 25, 175),
];

function sortByName() {
    nameArr.sort();
    nameArr.forEach((item, i) => {
        console.log(item);
    });
}
function sortByHeight() {
    heightArr.sort();
    heightArr.reverse();
    heightArr.forEach((item, i) => {
        console.log(item);
    });
}
sortByHeight();
