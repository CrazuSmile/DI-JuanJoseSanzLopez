const events = require('events');

class Car extends events.EventEmitter {
    constructor(brand, license) {
        super();
        this.brand = brand;
        this.license = license;
    }
}

let car1 = new Car('Ford', '12345');
let car2 = new Car('Seat', '123432');
let car3 = new Car('Tesla', '1231443');
let cars = [car1, car2, car3];

cars.forEach(function (eachCar) {
    eachCar.on('try', function () {
        console.log(eachCar.brand + ' ' + eachCar.license);
    });
});

car1.emit('try');
car2.emit('try');
car3.emit('try');