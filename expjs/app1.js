let  express = require("express");
let app = express();
let port = 2472;
app.get('/',(req,res)=>
{
    res.send("hi get request");
})
app.get('/product',(req,res)=>
{
    res.status(200).json({"message":"hi products message"})

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