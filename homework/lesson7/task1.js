//методы в классе
/*class Cat{
  constructor(name, state){
    this.name = name;
    this.state = 'lying';
  }
  meow(){
    console.log(`${this.name}: meow`)
  }
  up(){
    this.state = 'standing'
  }
  down(){
    this.state = 'lying'
  }
}

const cat = new Cat('murzik');*/

//методы наследуются одним классом из другого
/*class Methods{
  meow(){
    console.log(`${this.name}: meow`)
  }
  up(){
    this.state = 'standing'
  }
  down(){
    this.state = 'lying'
  }
}

class Cat extends Methods{
  constructor(name, state){
    super();
    this.name = name;
    this.state = 'lying';
  }
}

const cat = new Cat('murzik');*/

console.log(cat.name); // 'murzik'
console.log(cat.state); // 'lying'
cat.up();
console.log(cat.state); // 'standing'
cat.down();
console.log(cat.state); // 'lying'
cat.meow();


/*
    1) Переписать функцию-конструктор из урока №6 с использованием классов
    Создайте класс Cat экземпляры которого (объекты созданные с помощью данного конструктора)
    должны содержать свойства { name, state }
    и должны наследовать методы из прототипа
    meow - выводит в консоль строку "ИМЯ_КОШКИ: meow"
    up - меняет состояние кошки на 'standing'
    down - меняет состояние кошки на 'lying'
    Например:
    const cat = new Cat('murzik');
    console.log(cat.name); // 'murzik'
    console.log(cat.state); // 'lying'
    cat.up();
    console.log(cat.state); // 'standing'
    cat.down();
    console.log(cat.state); // 'lying'
    cat.meow(); // выводит в консоль "murzik: meow"
 */