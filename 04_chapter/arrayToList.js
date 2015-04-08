// Array To List

// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

// var list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };

// The resulting objects form a chain (a 'linked list')

// A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.

// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

// This function transforms an array into a list. First, we set the list to null, then we run through the array BACKWARDS. On each iteration, it sets the rest property to the current list, and the value property to the array element.
function arrayToList(ary){
	var list = null
	for(var i = ary.length-1; i >= 0; i--){
		list = {value: ary[i], rest: list}
	}
	return list;
}

// This function transforms a list into an array. We basically do the opposite of the functin above. We set the array to empty, then as long as the 'rest' property is not null, we push the 'value' property into the array. We then set the list to be equal to the 'rest' of the list, and keep doing that. For the last value, list.rest IS null, so the loop stops before we push this onto the array. So, outside of the while loop we push the last value on. 
function listToArray(list){
	var array = [];
	while(list.rest !== null){
		array.push(list.value)
		list = list.rest
	}
	array.push(list.value)
	return array;
}

// A different version can use a FOR loop to iterate over nodes. I prefer this version. In the FOR loop, the variable 'node' is set to the list. For each iteration, the code checks to see if 'node' still exists (i.e. that it is not null, like it would be at the end of the list). If it does exist, then we set node to equal 'rest'. Each time we iterate through, we take the list's value at that point, and push it onto the array. 
function listToArray(list){
	var array = []
	for(var node = list; node; node = node.rest){
		array.push(list.value);
	}
	return array;
}

// This function adds a new element to the front of a list. 
function prepend(element, list){
	if(list === null){
		list = {
			value: element,
			list: null
		}
	} else {
		list = {
			value: element,
			list: list.rest
		}
	}
	return list
}

// This function returns the nth value in a list, using nodes again. 
function nth(list, number){
	var node;
	for(var i = 0; i < number; i++){
		node = list.rest
	}
	return node.value;
}




