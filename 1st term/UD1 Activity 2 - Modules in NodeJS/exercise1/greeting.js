const os = require('node:os');
var hostname = os.userInfo()
console.log("Hello "+hostname.username)