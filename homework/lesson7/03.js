class Transport {
    constructor(status) {
        this.status = 'stopped';
    }
    run() {
        this.status = 'running';
    }
    stop() {
        this.status = 'stopped';
    }
}


class Car extends Transport {
    constructor(...args) {
        super(...args);
    }
}

const someTransport = new Transport();

console.log(someTransport.status);
someTransport.run();
console.log(someTransport.status);
someTransport.stop();
console.log(someTransport.status);
const someCar = new Car();
console.log(someCar.status);
someCar.run();
console.log(someCar.status);
someCar.stop();
console.log(someCar.status);
console.log(someCar);