// Reversing An Array

// Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?

function reverseArray(ary){
	var newArray = [];
	var originalLength = ary.length;
	for(var i = 0; i < originalLength; i++){
		newArray.push(ary.pop());
	}
	return newArray;
}

// to reverse IN PLACE, the key is to iterate over only half the array (using a for loop that ends when i is less than half the length of the array). A temporary variable holds the element at position i. This element is then overwritten by it's mirror image element on the other end of the array (the one that is at position array.length-1-i). The temporary variable is then put where the mirror image used to be. The loop then continues.
function reverseArrayInPlace(ary){
	for(var i = 0; i < Math.floor(ary.length/2); i++){
		var tempVar = ary[i];
		ary[i] = ary[ary.length-1-i];
		ary[ary.length-1-i] = tempVar;
	}
	return ary;

}