var connect = require('connect');
var serveStatic = require('serve-static');
var port = process.env.PORT;
var app = connect()

app.use(serveStatic(__dirname + '/public')
).listen(port);

console.log('Node is listening on port ' + port);
