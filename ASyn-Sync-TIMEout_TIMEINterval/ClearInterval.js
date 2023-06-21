
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
let x=setInterval(()=>
   {
       test2();
   }

   ,100)
  // test3();
   setTimeout(()=>
   {
      // console.log("lol");
      test3();
      clearInterval(x);
       
   },500)