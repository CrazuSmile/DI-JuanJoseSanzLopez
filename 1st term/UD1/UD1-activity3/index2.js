const events = require('events');
let EventsEm = events.EventEmitter;

let robot = new EventsEm();

robot.on('forward', function () {
    console.log('The robot moves forward.');
});

robot.emit('forward');

robot.on('backward', function () {
    console.log('The robot moves backward.');
});

robot.emit('backward');

robot.on('greet', function () {
    console.log('The robot greets you.');
});

robot.emit('greet');