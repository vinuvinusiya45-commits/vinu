//ES6 MODULE
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
let findMax=(a,b)=>{
    if(a>b){
        return a;
    }else{
        return b;
    }
    let findMin=(a,b)=>{
        if(a<b){
            return a;
        }else{
            return b;
        }
    }
}
export default add;//default export
export {subtract,mutliplication,division};//named export
