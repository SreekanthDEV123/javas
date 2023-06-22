let http = require('http');
//let fs = require('fs');
let url = require('url');
let server =http.createServer(function(req,res)
{
   // res.writeHead(200,{'content type':'text/html'})
//res.write("<h1>welcome http Server<h1>");

res.writeHead(200,{'content-type':'txt/html'});
let obj= url.parse(req.url,true).query;
if(obj.uname==="sreekanth"&&obj.upwd==="Sree")
{
    res.write("login succseful");
}
else
{
    res.write("login Unsuccseful");
}
})

server.listen(8080);
console.log("server running on port ");
