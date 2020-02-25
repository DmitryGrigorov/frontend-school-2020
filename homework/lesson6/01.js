function Cat(name, state) {
    this.name = name;
    this.state = 'lying';
}

Cat.prototype.meow = function () {
    console.log(this.name + ': meow');
};

Cat.prototype.up = function () {
    this.state = 'standing';
};

Cat.prototype.down = function () {
    this.state = 'lying';
};



const cat = new Cat('murzik');
console.log(cat.name); // 'murzik'
console.log(cat.state); // 'lying'
cat.up();
console.log(cat.state); // 'standing'
cat.down();
console.log(cat.state); // 'lying'
cat.meow(); // выводит в консоль "murzik: meow"

