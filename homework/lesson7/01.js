class Cat {
    constructor(name) {
        this.name = name;
        this.state = 'lying';
    }

    meow() {
        console.log(this.name + ': meow');
    }

    up() {
        this.state = 'standing';
    }

    down() {
        this.state = 'lying';
    }
}

let cat = new Cat('Murzik');

console.log(cat);
cat.up();
console.log(cat.state);
cat.down();
console.log(cat.state);
cat.meow();