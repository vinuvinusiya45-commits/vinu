 let ar=[1,9,2,4,3];
 let br=[6,8,4,9,8];

 console.log(ar[0]);
 console.log(ar[1]);
 ar[4]=90;
 console.log(ar);
 var sum=0;
 var prod=1;
 //add only even numbers;
 for(i=0;i<ar.length;i++){
    if(ar[i]%2==0){
        sum+=ar[i];
    }else{
        prod*=ar[i];
    }
    }
    console.log(sum);
    console.log(prod);

  //ar[0]+br[1]
  //ar[1]+br[1]
  for(i=0;i<ar.length;i++){
    console.log(ar[i]+br[i])
  }
    
    
        
    

  