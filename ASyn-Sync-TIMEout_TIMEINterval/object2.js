
function test()
{
   console.log("sreekanth")
}
function test2()
{
   console.log("srinu");
}
function test3()
{
   console.log("sri");
}
test();
setInterval(()=>
   {
       test2();
   }

   ,500)
  // test3();
   setTimeout(()=>
   {
      // console.log("lol");
      test3();
       
   },400)