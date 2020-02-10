 class Animal{
   constructor(movingType, color){
     this.movingType = movingType;
     this.color = color;
   }
 }
 
 class Dog extends Animal{
  constructor(movingType, color, name, age, weight){
    super(movingType, color);
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
}

const someAnimal = new Animal('walking', 'black');
console.log(someAnimal);

const someDog = new Dog('walking', 'black', 'tuzik', 4, 10);
console.log(someDog);
 
 /*
    2)
    Создайте два класса Animal и Dog
    У всех экземпляров класса Animal есть собственные (не наследуемые) свойства: { movingType, color }
    Например: const someAnimal = new Animal('walking', 'black'); // { movingType: 'walking', color: 'black' };
    А у экземпляров класса Dog есть собственные свойства: { name, age, weight }
    Например: const someDog = new Dog('tuzik', 4, 10); // { name: 'tuzik', age: 4, weight: 10 };
    Реализуйте наследование класса Animal классом Dog,
    так чтобы все экземпляры класса Dog имели свойства { movingType, color, name, age, weight };
    Например: const someDog = new Dog('walking', 'black', 'tuzik', 4, 10); // { movingType: 'walking', color: 'black', name: 'tuzik', age: 4, weight: 10 };
 */