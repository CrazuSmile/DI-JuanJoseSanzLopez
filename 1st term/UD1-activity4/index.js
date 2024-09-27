const http = require('http');
const fs = require('fs');

let users;

fs.readFile('./persons.json', function (err, data) {
    //Check for errors
    if (err) throw err;

    // Converting to JSON
    users = JSON.parse(data);
}
);

var server = http.createServer(function (req, res) {
    console.log(req.url);
    res.writeHead(200, { 'Content-type': 'application/json' });



    res.end(JSON.stringify(users));
});

server.listen(3000, '127.0.0.1', function () {
    console.log("Server running on http://127.0.0.1:3000")
});