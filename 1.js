var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    fs.readFile('1.html',function(err,data){
        res.writeHead(200,{'Content-type':'Text'})
        res.write(data);
        return res.end();
    });
}).listen(8080);