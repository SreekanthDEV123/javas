
//console.log("super");
//for(let  i=0; i<10; i++)
//{
    
   // test();

//}
//console.log("good");
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
 setTimeout(()=>
    {
        test2();
    }

    ,1000)
    test3();
    setTimeout(()=>
    {
        console.log("lol");
        
    },500)