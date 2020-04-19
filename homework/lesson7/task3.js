 class Transport{
  constructor(){
    this.status = 'stopped';
  }
  run(){
    return this.status = 'running';
  }
  stop(){
    return this.status = 'stopped';
  }
 }
 
 const someTransport = new Transport();

 console.log(someTransport.status); // 'stopped'
 console.log(someTransport);
 console.log(someTransport.run()); // 'running'
 console.log(someTransport);
 console.log(someTransport.stop()); // 'stopped'

 class Car extends Transport{
 }

 const someCar = new Car();
 console.log(someCar.status); // 'stopped'
 console.log(someCar);
 console.log(someCar.run()); // 'running'
 console.log(someCar);
 console.log(someCar.stop()); // 'stopped'
 /*
    3)
    Создайте два класса Transport и Car
    Эклемпляры класса Transport имеют свойтсво status и методы run и stop,
    которые меняют свойсто status на 'running' и 'stopped' соответсвтенно.
    Унаследуйте эти методы и свойство классом Car
    
    Например:
    const someTransport = new Transport();
    console.log(someTransport.status); // 'stopped'
    console.log(someTransport.run()); // 'running'
    console.log(someTransport.stop()); // 'stopped'
    const someCar = new Car();
    console.log(someCar.status); // 'stopped'
    console.log(someCar.run()); // 'running'
    console.log(someCar.stop()); // 'stopped'
 */