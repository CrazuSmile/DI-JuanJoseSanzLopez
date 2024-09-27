// const http = require('http');
// 
// var server = http.createServer(function (req, res) {
//     console.log(req.url);
//     res.writeHead(200, { 'Content-type': 'application/json' });
// 
//     var miObj = {
//         brand: 'Ford',
//         model: 'Focus',
//         license_plate: 1232312
//     }
// 
//     res.end(JSON.stringify(miObj));
// });
// 
// server.listen(3000, '127.0.0.1');

const users = require("./users.json");
console.log(users);