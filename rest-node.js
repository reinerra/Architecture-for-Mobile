var connect = require('connect');
var resty = require('resty');

var path = require("path");
var filename = "resources";
var appPath = path.resolve(path.join(__dirname, filename));
console.log(appPath);


var app = connect.createServer();
app.use(resty.middleware(appPath));
app.listen(8124, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8124/')


