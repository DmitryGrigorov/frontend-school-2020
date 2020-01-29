// конструктор с прототипом

function Car () {
    this.state = 'stopped';

}
Car.prototype.run = function () {
    this.state = 'running';
}

let myCar = new Car()
console.log(myCar.run());



// способы задания прототипов

// встроенные объекты, полифилы

// защищенные свойства

// наследование свойств не из прототипа
