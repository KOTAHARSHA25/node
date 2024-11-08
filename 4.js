var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    fs.rename('1.txt','2.txt',function(err){
        if(err)
            throw new Error("wrong");
        console.log('File renamed');
    });
}).listen(8060);