function Transport() {
    this.status = 'stopped';
}

Transport.prototype.run = function() {
    this.status = 'running';
};

Transport.prototype.stop = function() {
    this.status = 'stopped';
};

function Car(status, ...args) {
    Transport.apply(this, args);
}

Car.prototype = Object.create(Transport.prototype);
Car.prototype.constructor = Car;

const someTransport = new Transport();

console.log(someTransport.status);
someTransport.run();
console.log(someTransport.status);
someTransport.stop();
console.log(someTransport.status);
console.log("\n");
const someCar = new Car();
console.log(someCar.status);
someCar.run();
console.log(someCar.status);
someCar.stop();
console.log(someCar.status);
console.log(someCar);