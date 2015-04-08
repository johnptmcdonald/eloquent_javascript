// The Sum Of A Range

// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function range(start,end){
	var newArray = [];
	for(var i = start; i <= end; i++){
		newArray.push(i);
	}
	return newArray;
}

// Here is a recursive version (that requires a global newArray variable):
var newArray = [];

function range(start,end){
	if(start<=end){
		newArray.push(start);
		start++;
		return range(start, end);
	} else {
		return newArray;
	}
}

// Here is the array sum function:
function sum(ary){
	var total = 0;
	for(var i = 0; i < ary.length; i++){
		total += ary[i];
	}
	return total;
}

// Here is the bonus assignment (I didn't want to use two different loops for step of +1 and -1):
function range(start,end,step){
	var newArray = [];
	if(step === undefined && start<end){
		step = 1;
	} else if (step === undefined && start>end){
		step = -1;
	}
	while(start !== end){
		newArray.push(start);
		start += step
	}
	newArray.push(end);
	return newArray;
}



