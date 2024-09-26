const events = require('events');

class Person extends events.EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
}

let juan = new Person('juan');

juan.on('habla', function (mensaje) {
    console.log(mensaje + ', Juan ha hablado');
});

juan.emit('habla', 'Hagase la luz');


//let EventsE = events.EventEmitter;
//
//let ee = new EventsE();
//
//ee.on('data', function (date) {
//    console.log(date);
//});
//
//ee.emit('data', Date.now());
//

