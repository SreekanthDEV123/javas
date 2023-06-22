let http = require('http');
let fs = require('fs');
let server =http.createServer(function(req,res)
{
   // res.writeHead(200,{'content type':'text/html'})
//res.write("<h1>welcome http Server<h1>");
fs.readFile('sample2.json','utf-8',function(err,data){

    if(err)
    { throw err;
    }
    res.write(data);
    res.end();
})
});
server.listen(8986);
console.log("server running on port no. 8989");
