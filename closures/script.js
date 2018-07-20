// function map(array, callback) {
// 	var result = [];
// 	for (var i = 0; i < array.length; i++) {
// 		result.push(callback(array[i]));
// 	}
// 	return result;
// }

// var my_array = [2, 3, 4];

// function double(num) {
// 	return num*2;
// }

// //pass function the variable reference instead 
// //A first class fucntion = a function that 
// //can be passed around as a variable
// var new_array = map(my_array, double);


// console.log([2, 3, 4]);
// console.log(new_array);

/*Write a function that takes an array and a
call back function. Iterate through each element
and then return */ 

// button.addEventListener("click", changeToRed)

// //Notice how this is a very VERSATILE METHOD!
// function select(array, callback) {
// 	var result = [];
// 	for (var i = 0; i < array.length; i++) {
// 		if (callback(array[i])) {
// 			result.push(array[i]);
// 		}
// 	}
// 	return result;
// }

// function even(num) {
// 	return num % 2 === 0;
// }

// function greaterThanTen(num) {
// 	return num >= 10;
// }

// var nums = [2, 3, 4, 5, 10, 23, 45, 46]

// var selection1 = select(nums, even)
// console.log(selection1);

// var selection2 = select(nums, greaterThanTen)
// console.log(selection2);

function detect(array, callback) {
	for (var i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			return array[i];
		}
	}
}

function divisible(num) {
	return num % 2 === 0 && num % 3 === 0;
}

var n = [1, 2, 12, 3, 4, 5, 6, 7, 8, 9]

var detect1 = detect(n, divisible);
console.log(detect1);

var detect2 =detect(["lol", "my", "life"], function(word){
	return word.length >= 4;
})
console.log(detect2);

function all(array, func) {
	for (var i = 0; i < array.length; i++) {
		if(func(array[i]) == false) {
			return false
		}	
	}
	return true;
}

var n2 = [12, 6, 18]

var all1 = all(n2, divisible) 
console.log(all1);

