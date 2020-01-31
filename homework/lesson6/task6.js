function Transport(){
  this.status = 'stopped';
}

Transport.prototype.run = function(){
  return this.status = 'running';
}

Transport.prototype.stop = function(){
  return this.status = 'stopped';
}

const someTransport = new Transport();
console.log(someTransport.status);
console.log(someTransport.run());
console.log(someTransport.stop());
console.log(someTransport);

function Car(...args){
  Transport.apply(this,args);
}

const connectProto = Object.create(Transport.prototype);
Car.prototype = connectProto;
Car.prototype.constructor = Car;

const someCar = new Car();

console.log(someCar.status); // 'stopped'
console.log(someCar.run()); // 'running'
console.log(someCar.stop()); // 'stopped'
console.log(someCar);

// 6 (наследование через прототипы)
// Создайте два конструктора Transport и Car
// Эклемпляры конструктора Transport имеют свойтсво status и методы run и stop,
// которые меняют свойсто status на 'running' и 'stopped' соответсвтенно.
// Унаследуйте эти методы и свойство конструктором Car
//
// Например:
// const someTransport = new Transport();
// console.log(someTransport.status); // 'stopped'
// console.log(someTransport.run()); // 'running'
// console.log(someTransport.stop()); // 'stopped'
// const someCar = new Car();
// console.log(someCar.status); // 'stopped'
// console.log(someCar.run()); // 'running'
// console.log(someCar.stop()); // 'stopped'