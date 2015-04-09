// Deep Comparison

// The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

// To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".

function deepEqual(object1, object2) {
  	if ((typeof object1 == "object" && object1 !== null) && (typeof object2 == "object" && object2 !== null)) {
	    if (Object.keys(object1).length != Object.keys(object2).length)
	      	return false;

	  	// This is the real meat of the function. for each property in object1, we see if there is also that property in object2. We then run deepEqual on those properties of obect1 and object2. If they are different, we immediately return false. If they are the same, nothing happens - it keeps running through the for loop. Eventually, if it never returns false, t breaks out of the loop, and returns true
	    for (var prop in object1) {
	      	if (object2.hasOwnProperty(prop)){  
	        		if (!deepEqual(object1[prop], object2[prop])){
	          			return false;
	        		}
	      		} else {
	        	return false;
	      	}
	    }

    return true;
    
  	} else if (object1 !== object2) {
    	return false;
  	} else {
    	return true;
  	}
}




