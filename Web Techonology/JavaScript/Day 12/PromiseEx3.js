// Promise Function
// Chaning of then api after resolved

new Promise(function(resolve,reject){
      setTimeout(() => 
            resolve(1)
            //reject("Something is Wrong ...");
      ,2000)}).then(function(result)
      {
            console.log("Result 1 : ",result);
            return result*2;
      }).then(function(result)
      {
            console.log("Result 2 : ",result);
            return result*3;
      }).then(function(result)
      {
            console.log("Result 3 : ",result);
            return result*4;
      });