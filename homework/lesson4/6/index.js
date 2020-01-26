// 6)
// напишите конструктор Dog который создает объект со свойствами name, age, breed, weight, height, position, status
// и методами:
// dog.bark() => Выводит в консоль '{{имя собаки}}: bark';
// dog.place() => Меняет свойство position на строку 'place';
// dog.come() => Меняет свойство position на строку 'here';
// dog.goOut() => Меняет свойство position на строку 'go out';
// dog.sit() => Меняет свойство status на строку 'sitting';
// dog.stand() => Меняет свойство status на строку 'standing';
// dog.down() => Меняет свойство status на строку 'lying';
//
// создайте массив с 25 объектами Dog

function Dog(name,age,breed,weight,height,position,status) {
  this.name = name,
  this.age = age,
  this.breed = breed,
  this.weight = weight,
  this.height = height,
  this.position = position,
  this.status = status,

  this.bark = function() {
    console.log(`{{${this.name}}}: bark`)
  }
  
  this.place = function() {
    this.position = 'place'
  }

  this.come = function() {
    this.position = 'here'
  }

  this.goOut = function() {
    this.position = 'go out'
  }

  this.sit = function() {
    this.status = 'sitting'
  }

  this.stand = function() {
    this.status = 'standing'
  }

  this.down = function() {
    this.status = 'lying'
  }
}

const dogs = (new Array(25)).fill('').map(item => new Dog);