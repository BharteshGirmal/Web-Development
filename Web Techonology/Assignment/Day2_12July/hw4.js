/*
4.  write a JS file that  has a function alpha that accepts three functions as parameters 
	the parameter function1 takes 2 strings as parameters
	the parameter function2 takes 3 numbers as parameters
       the parameter function3 takes rest parameter as parameter

     the alpha function should call the 3 functions one after the other with proper parameters.
	the functions are supposed to print all the parameters in different ways.
*/

function Alpha(f1,f2=0,f3=0) // function accepting three functions as a parameter
{
      if(f2!=0 && f3!=0)
      {
            f1("India" , "Japan")
            f2(1,2,3)
            f3(1,2,3,4,5,6,7,8,9,10)  
      }
      else if(f3 === 0 && f2!=0)
      {

      }
      else
      {
            console.log("No Parameters Passed")
      }
        
}

function f1(str,str2)
{
      console.log("Function1 : "+str+" ,"+str2)
}

function f2(n1,n2,n3)
{
      console.log("Num1 : "+n1+" Num2: ",+n2+" Num3 : "+n3)
}

//arr=["White","Yellow","Pink","Blue","Green"]

function f3(...arr)
{
      for(var i=0;i<arr.length;i++)
      {
            console.log("Num : "+arr[i])
      }
}


//Function call

Alpha(f1,f2,f3);

Alpha
(
      function(n1,n2){console.log("Function 1 : ",n1,n2)},
      function(n1,n2,n3){console.log("Function 2 : ",n1,n2,n3)},
      function(...arr){console.log("Function 3 : ",arr[3],arr[4])}
)