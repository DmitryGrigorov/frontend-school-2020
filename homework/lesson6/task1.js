function Cat(name){
  this.name = name;
  this.state = 'lying';
}

Cat.prototype.meow = function(){
  console.log(this.name + ": meow");
}

Cat.prototype.up = function(){
  this.state = 'standing';
}

Cat.prototype.down = function(){
  this.state = 'lying';
}

const cat = new Cat('murzik');
console.log(cat);
console.log(cat.name); // 'murzik'
console.log(cat.state); // 'lying'
cat.up();
console.log(cat.state); // 'standing'
cat.down();
console.log(cat.state); // 'lying'
cat.meow(); // выводит в консоль "murzik: meow"

// 1
// Создайте конструктор Cat экземпляры которого (объекты созданные с помощью данного конструктора)
// должны содержать свойства { name, state }
// и должны наследовать методы из прототипа
// meow - выводит в консоль строку "ИМЯ_КОШКИ: meow"
// up - меняет состояние кошки на 'standing'
// down - меняет состояние кошки на 'lying'
//
// Например:
// const cat = new Cat('murzik');
// console.log(cat.name); // 'murzik'
// console.log(cat.state); // 'lying'
// cat.up();
// console.log(cat.state); // 'standing'
// cat.down();
// console.log(cat.state); // 'lying'
// cat.meow(); // выводит в консоль "murzik: meow"