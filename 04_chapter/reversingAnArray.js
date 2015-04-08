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

function reverseArrayInPlace(ary){

// TO BE CONTINUED!

}