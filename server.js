var http = require('http');
var fs = require('fs');

var httpServer = http.createServer(function(req,res){
	fs.readFile('index.html',function(err,data){
		res.writeHead(200,{'Content-type':'text/html'});
		res.end(data);
	});
});

httpServer.listen(8090,'127.0.0.1');
console.log("Http Webserver has started!!!");