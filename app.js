const http = require('http');

http.createServer(function(req, res) {
res.write('hello from digi');
res.end();	
}).listen(3000);

console.log('server started');
