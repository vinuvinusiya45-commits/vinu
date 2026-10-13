function helo(a,b,c){
    c(a,b);
}
function mutliplication(a,b){
    console.log(a*b);
}
helo(10,5,mutliplication);// callback function