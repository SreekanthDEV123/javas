let  obj ={
    name:"sreekanth",
    age: 25,
    addres:
    {
        state:"hindupur"
    }
}



let {addres:{state:mystate}}=obj;
console.log(mystate);