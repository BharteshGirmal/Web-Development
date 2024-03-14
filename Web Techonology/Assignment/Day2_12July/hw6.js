/*
6. Write a JS file that has a function factory 
		this function has an array of functions
		the factory function accepts an index parameter
		it will return the function at the given index to the caller
the caller will call the function .
*/


function fun1()
{
	console.log("Function 1 is get Called ");
}

function fun2()
{
	console.log("Function 2 is get Called ");
}

function fun3()
{
	console.log("Function 3 is get Called ");
}

function fun4()
{
	console.log("Function 4 is get Called ");
}

function Factory(index)
{
	arr=[fun1,fun2,fun3,fun4];
	console.log("Function Factory Get Called")
	for(var i=0; i<arr.length; i++)
	{
		if(index === i)
			return arr[i];
	} 
}

var f=Factory(1);
f();