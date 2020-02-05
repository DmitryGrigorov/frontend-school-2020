// // Класс базовый синтаксис

class Person {
  // age = 40;

  // статичнский метод
  static type = "PERSON"

  constructor(options) {
    this.name = options.name;
  };

  static sayHi() {
    console.log('Hi, ' + this.name);
  }

  get age() {
    return this.age;
  }

  set age(newAge) {
    this.age = newAge;
  }
}

let misha = new Person({ name: 'Misha' });

console.log(misha);

let sasha = new Person({ name: 'Sasha' });

// Наследование классов

class Child extends Person {
  constructor(options) {
    super(options);
    this.weight = options.weight;
    this.height = options.height;
  }

  run() {
    super.sayHi();
    console.log('running')
  }
}

let jack = new Child({ name: 'Jack', weight: 100, height: 120 });

console.log();
// jack.run();
// jack.sayHi();

// статические свойства и методы
// console.log(Person.type);
// console.log(Child.type);
// console.log(jack.__proto__.constructor.type)

// геттеры и сеттеры



// Проверка класса: instaceof

console.log( jack instanceof Child)
console.log( jack instanceof Person)
console.log( jack instanceof Object)

// Примеси Object.assign

const methods = {
  jump() {
    console.log('jump');
  },
  go() {
    console.log('go')
  }
}

Object.assign(jack, methods);
jack.go();
jack.jump();

class Block {
  constructor(selectorId) {
    this.$el = document.getElementById(selectorId);
  }

  hide() {
    this.$el.style.display = 'none'
  }

  show() {
    this.$el.style.display = 'block'
  }
}

class Box extends Block {
  constructor(options) {
    super(options.selectorId)
    this.$el.style.width = options.size + 'px';
    this.$el.style.height = options.size + 'px';

    this.$el.style.background = options.color
  }
}


const box1= new Box({
  selectorId: 'block1',
  size: 100,
  color: 'red'
})

console.log(box1);