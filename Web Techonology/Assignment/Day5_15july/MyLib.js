/*
      1.  Write a Javascript  mylib.js [Hint include this js file using 
            <script src=....  >  ]
		create a class Product using ES6 class keyword
		the product has a name,desc and cost properties
		the product has a show method that shows all properties
*/

class Product
{
	constructor (_name, _desc ,_cost)
	{
		this._cost = _cost;
        	this._name = _name;
        	this._desc = _desc;
	}

	show()
	{
		console.log("Name : ",this._name,"  Description : ",this._desc,"  Cost : ",this._cost);
	}

}

var product = new Product("Pendrive","Data Communication",1120);
product.show();