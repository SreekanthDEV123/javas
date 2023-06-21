let  obj ={
    name:"sreekanth",
    age: 25,
    addres:
    {
        state:"hindupur"
    }
}


//let {age:myage,name}=obj;
//console.log(age);
//console.log(name);
let {addres:{state:mystate}}=obj;
console.log(mystate);