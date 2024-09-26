const events = require('events');
let EventsEm = events.EventEmitter;

let robot = new EventsEm();

robot.on('forward', function () {
    console.log('The robot moves forward.');
});

robot.emit('forward');