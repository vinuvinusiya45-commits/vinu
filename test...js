//excepting handling

var a=10;
var b=5;

try{
    if(b==0){
        throw new Error("invalid input");
    }
    c=a/b;
    console.log(c);
}catch(e){
    console.log(e.message);
}finally{
    console.log("program over")
}

var findRectangleArea=(l,b)=>{
    try{
       if(l==0|| b==0){
        throw new Error("invalid input")
       }else{
        console.log(l*b);
       }
    }catch(e){
        console.log(e.message);
    }
    finally{
        console.log("program over")
    }
}
var result=findRectangleArea(10,0);
console.log(result);

var findCircleArea = (r) => {
    try {
        if (r == 0) {
            throw new Error("Invalid input");
        } else {
            console.log(3.14 * r * r);
        }
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log("program over");
    }
}

var result = findCircleArea(0);
console.log(result);