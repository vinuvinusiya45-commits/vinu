console.log("hello javascript")
var a=100;
var b=200;

var c=a+b;
var d=a-b;
var e=a*b;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
var f=a/b;
console .log(c);
console .log(d);
console .log(e);
console .log(f);

console .log(a>b);
console .log(a<b);
console .log(a>=b);
console .log(a<=b);
console .log(a==b);
console .log(a!=b);

var aa=100;
console .log(typeof(aa));

var bb="hello"
console .log(typeof(bb));

var cc=true;
console .log(typeof(cc));

var dd={name:'abc'};
console .log(typeof(dd));

var ee=function (){}
console .log(typeof(ee));

var ff=[1,2,3,4];
console.log(typeof(ff));
if(a>b){
    console.log("a is greater")
}else{
    console.log("b is greater")
}
var m=7;
var n=5;
if(m>n){
    console.log("m is greater");
}else{

    console.log("n is greater");
}
// logical opertor
// && and
// || or
// ! not
var x=true;
var y=false;
console.log(x&&y); // true and false = false
console.log(x||y); // true or false = true
console.log(!x); // true = false

var week=1;
switch(week){
    case 1:console.log("monday");break;
    case 2:console.log("tuesday");break;
    case 3:console.log("wednesday");break;
    default:console.log("no match");
}
var month=2;
switch(month){
    case 1:console.log("jan");break;
    case 2:console.log("feb");break;
    case 3:console.log("mar");break;
    default:console.log("no match");
}
//loops
var k=5;
var i=1;
while(i<=k){
    
    console .log(k);
    k=k-1;
}
//+ addition
//-subtraction
var sum=0;
var prod=1
var val=5;
var flag=true;
    for(i=2;i<val;i++){// for loop i++= i=i+1
        //print odd number
        if(i%2!==0){
            console.log(i,"is odd number")
        }
        
    }

