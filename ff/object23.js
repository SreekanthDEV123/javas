let  obj ={
    name:"sreekanth",
    age: 25,
    addres:
    {
        state:"hindupur",
        directions:
        {
            left:100
        }
    }
}



//let {addres:{state:mystate}}=obj;
//console.log(mystate);
let {addres:{directions:{left}}}=obj;
console.log(left);