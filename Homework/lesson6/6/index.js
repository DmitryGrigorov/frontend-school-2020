function Transport() {}

Transport.prototype.status = 'stopped';
Transport.prototype.run = function() {
    status = 'running';
    return status;
}
Transport.prototype.stop = function() {
    status = 'stopped';
    return status;
}

function Car() {}
Car.prototype = Transport.prototype;


const someTransport = new Transport();
console.log(someTransport.status); // 'stopped'
console.log(someTransport.run()); // 'running'
console.log(someTransport.stop()); // 'stopped'
const someCar = new Car();
console.log(someCar.status); // 'stopped'
console.log(someCar.run()); // 'running'
console.log(someCar.stop()); // 'stopped'
