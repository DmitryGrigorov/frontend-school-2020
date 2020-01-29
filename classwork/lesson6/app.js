// конструктор с прототипом
function Car{




}
Car.prototype.run = function{
    console.log('running');
}
console.log(Car === Car.prototype.const);
const someCar = new Car();
console.log(someCar);

// способы задания прототипов

// встроенные объекты, полифилы

// защищенные свойства

// наследование свойств не из прототипа
