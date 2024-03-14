// Promise Functions

function fun1()
{
      console.log("Function 1 is Called ..")
}

function fun2()
{
      console.log("Function 2 is Called ..")
}

function main()
{
      console.log("Main Function  is Called ..");

      setTimeout(fun1,2000);
      // after all task queue complete then callback function is called here ...

      let promise = new Promise((resolve,reject)=>{
            resolve("All is well ...")// value of resolve
            reject("Have Some Problem ...")// value of reject
      });

      // if Success
      promise.then((resolvedVal)=>{console.log("In then  ",resolvedVal)});
      // if again resolved
      promise.then(rv=>console.log("Anather one ",rv));
      // if Rejected
      promise.catch(reject=>console.log("Rejected : ",reject));

      fun2();
      // fun2 is called first in after main then remaining task promise 
}

main();