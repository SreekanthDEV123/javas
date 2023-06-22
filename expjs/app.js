let  express = require("express");
let app = express();
let port = 2456;
app.get('/',(req,res)=>
{
    res.send("hi get request");
})
app.get('/product',(req,res)=>
{
    res.send("hi get  products");
})
app.get('/category',(req,res)=>
{
    res.send("hi j category");
})
app.listen(port,(err)=>
{
  //  res.send("hi get request");
   if(err)
   {
    throw err;
   }
   else{
    console.log('server is running on port'+port)
   }
})