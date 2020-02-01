// конструктор с прототипом

function Car() {
    Car.prototype.run = function() {

        console.log('running');

    }


    // способы задания прототипов
    comst someCar = new Car();
    console.log(someCar);

}

// встроенные объекты, полифилы

// защищенные свойства

// наследование свойств не из прототипа