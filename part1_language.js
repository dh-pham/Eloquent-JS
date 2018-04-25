// Chapter 3

// // return 0 if even, 1 if odd
// function even_odd_check(num) {
// 	if (num <= -1) 
// 		return -1;
// 	else if (num === 0)
// 		return 0;
// 	else if (num === 1)
// 		return 1;
// 	else 
// 		return even_odd_check(num - 2);
// }

// console.log(even_odd_check(50));
// console.log(even_odd_check(-2));

// Chapter 4

// var description = {
// 	work: "went to work",
// 	"touch tree": "touched a tree",
// 	work: "duplicate"
// }
// console.log(description.work);
// console.log("object" == typeof(description));

// function countArgument() {
// 	console.log("Have ", arguments.length);
// 	console.log("Have ", arguments[0]);
// }

// countArgument("1", "2", "3");

function deepEqual(val1, val2) {
	var type1 = typeof(val1);
	var type2 = typeof(val2);
	if (type1 != type2) return false;
	if (type1 != "object") return (val1 = val2);
	else { // if type1 = type2 = "object"
		if (Object.keys(val1).length != Object.keys(val2).length) {
			console.log("the numbers of key of two obj is different!");
			return false;
		}
			
		for (var key in val1) {
			console.log(key);
			if(!key in val2) return false;
			if(val1.key != val2.key) return false;
		}
	}
	return true;
}

var obj1 = {
	key1: "key1",
	key2: "key2"
}

var obj2 = {
	key1: "key1",
	key2: "key2",
	key3: "key3",
}

console.log(deepEqual(obj1, obj2));