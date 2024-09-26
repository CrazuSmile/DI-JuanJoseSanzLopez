const events = require('events');
let EventsEm = events.EventEmitter;

let hello = new EventsEm();


hello.on('hello', function () {
    console.log('hello');
});

setInterval(function () {
    hello.emit('hello');
}, 5000);