class Transport {
    status = 'stopped';
    run() {
        status = 'running';
        return status;
    }
    stop() {
        status = 'stopped';
        return status;
    }
}

class Car extends Transport {

}

const someTransport = new Transport();
console.log(someTransport.status); // 'stopped'
console.log(someTransport.run()); // 'running'
console.log(someTransport.stop()); // 'stopped'
const someCar = new Car();
console.log(someCar.status); // 'stopped'
console.log(someCar.run()); // 'running'
console.log(someCar.stop()); // 'stopped'
