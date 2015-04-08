# Functions

A *function definition* is just a regular variable definition where the value given to the function just happens to be a function.

    var square = function(x){
    	return x * x;
    };

A *function declaration* is as follows, and this kind of function can be called anywhere in the folder:

    function square(x){
    	return x * x;
    }


# Closures
What happens to local variables when the function call that created them is no longer active?

    function wrapValue(n) {
    	var localVariable = n;
    	return function() { return localVariable; };
    }

This function, wrapValue(), creates a local variable and then returns a function whose job it is to return that local variable. 

This feature — being able to reference a specific instance of local variables in an enclosing function — is called *closure*. A function that “closes over” some local variables is called *a closure*. A closure effectively 'freezes' the variable that were available to that function at the time it was run. 

Closures, therefore, allow us to write a function that can create and return functions for us. e.g.

    function multiplier(factor){
    	return function(number){
    		return number*factor;
    	};
    }

In this case, we could call `multiplier(2)` and set it to the variable `double`. Or we could call `multiplier(3)` and set it to the variable `triple`.

Then if we ran `double(4)`, it would return 8, and if we ran `triple(4)`, it would return 12. 

