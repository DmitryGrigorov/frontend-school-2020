class Human {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    getInfo() {
        this.name + ', ' + this.age + ', ' + this.height;
    }

    get firstname() {
        return this.name;
    }
    set firstname(name) {
        return this.name = name;
    }

    static compareHeight(a, b) {
        return b.height - a.height;
    }

    static compareName(a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if ( b.name > a.name) {
            return -1;
        }
        return 0;
    }
}

let arr = [
    'Коля', 23, 180,
    'Даша', 19, 170,
    'Ваня', 18, 192,
    'Петя', 45, 178,
    'Вася', 34, 197,
    'Джони', 40, 168,
    'Катя', 37, 160,
    'Петя', 29, 200,
    'Соня', 21, 172,
    'Женя', 25, 175
];

let humans = [];
let x = 0;
do {
    humans.push(new Human(arr[x], arr[x+1], arr[x+2]));
    x = x+3;
}
while (x < arr.length);



function sortByHeight(humans) {
    return humans.sort(Human.compareHeight);
}

function sortByName(humans) {
    return humans.sort(Human.compareName);
}

humansByName  =  sortByName(humans);
humansByHeight  =  sortByHeight(humans);


console.log(humansByName);
console.log(humansByHeight);