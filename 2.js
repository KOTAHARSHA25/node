var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    fs.writeFile('1.txt','Hello',function(err){
        if(err)
            throw new Error("wrong");
        console.log('File Created:1.txt1');
    });
}).listen(8090);