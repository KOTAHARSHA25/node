var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    fs.unlink('2.txt',function(err){
        if(err)
            throw new Error("wrong");
        console.log('File removed');
    });
}).listen(8060);