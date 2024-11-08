var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    fs.appendFile('1.txt','Hello',function(err){
        if(err)
            throw new Error("wrong");
        console.log('File updated :1.txt1');
    });
}).listen(8060);