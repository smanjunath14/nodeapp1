var http = require('http');
var fs = require('fs');
var os = require('os');

var message = 'Here is some info about node server';
var sysarray = new Array('Type: '+os.type(),
'Node Version: '+process.version,
'Platform: '+os.platform(),
'arch:'+os.arch(),
'release: '+os.release(),
'uptime: '+os.uptime(),
'loadavg: '+os.loadavg(),
'total memory: '+os.totalmem(),
'free memory:'+os.freemem(),
'number of cpus: '+os.cpus(),
'network interfaces:'+os.networkInterfaces()
);
 
var httpServer = http.createServer(function(req,res){
		console.log('Recieved the request!');
		res.writeHead(200,{'Content-type':'text/html'});
		res.write(message);
		var arrayLen = sysarray.length;
		var i=0;
		while(i < arrayLen) {
		 res.write('<h1>'+sysarray[i]+'</h1>');
		 i++;
		 }
		res.end('---End---');

});

httpServer.listen(8090,'127.0.0.1');
console.log("Http Webserver has started!!!");
