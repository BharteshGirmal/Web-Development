

let x= new Promise((resolve,reject)=>
{
      // if sucess then ....

      setTimeout(() => {
           let num= Math.random()*10; // random number  
           if(num > 10)
           {
                  reject(num);
           }
           else
           {
                  resolve(num);
           }
      }, 1000);
});

//1. if promise is Sucessed ===> then() api is called ...
x.then((resolvedVal)=>{console.log("Sucess Value  : ",resolvedVal)});
//2. if Promise fails ===> catch() api is called ...
x.catch((rejectedVal)=>{console.log("Rejected Value : ",rejectedVal)});