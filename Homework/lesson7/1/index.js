class Cat {
    constructor(name) {
        this.name = name;
    }
    state = 'lying';

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

const cat = new Cat('murzik');

console.log(cat.name);
console.log(cat.state);
cat.up();
console.log(cat.state);
cat.down();
console.log(cat.state);
cat.meow();
