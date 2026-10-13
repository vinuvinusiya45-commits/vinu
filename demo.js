let example=()=>{
    console.log("hello from module");
}
let add=(a,b)=>{
    return a+b;
}
let subtract=(a,b)=>{
    return a-b;
}
let mutliplication=(a,b)=>{
    return a*b;
}
let division=(a,b)=>{
    return a/b;
}
module.exports={example,add,subtract,mutliplication,division};