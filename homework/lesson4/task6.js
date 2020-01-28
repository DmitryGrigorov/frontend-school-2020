function Dog (name, age, breed, weight, height, position, status){
  this.name = name;
  this.position = position;
  this.status = status;
  this.age = age;
  this.breed = breed;
  this.weight = weight;
  this.height = height;

  this.bark = function(){
    console.log(this.name + ": bark");
  };

  this.place = function(){
    this.position = 'place';
  };

  this.come = function(){
    this.position = 'here';
  };

  this.goOut = function(){
   this.position = 'go out';
  };

  this.sit = function(){
    this.status = 'sitting';
  };

  this.stand = function(){
    this.status = 'standing';
  };

  this.down = function(){
    this.status = 'lying';
  };
}

let dog = new Dog('Bobik', 22);

console.log(dog);

// создайте массив с 25 объектами Dog
function createArrayDog(count){    
  for(var i = 1, arr = []; i <= count; i++) {
    arr.push(dog);
  }
  return arr;
}

console.log(createArrayDog(25));


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