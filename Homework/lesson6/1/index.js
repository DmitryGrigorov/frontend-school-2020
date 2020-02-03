function Cat(name) {this.name = name;}

Cat.prototype.state = 'lying';
Cat.prototype.meow = function() {
    console.log(this.name + ': meow');
};
Cat.prototype.up = function() {
    this.state = 'standing';
};
Cat.prototype.down = function() {
    this.state = 'lying';
};


const cat = new Cat('murzik');
console.log(cat.name);
console.log(cat.state);
cat.up();
console.log(cat.state);
cat.down();
console.log(cat.state);
cat.meow();
