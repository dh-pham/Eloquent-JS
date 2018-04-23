// Chapter 3

// return 0 if even, 1 if odd
function even_odd_check(num) {
	if (num <= -1) 
		return -1;
	else if (num === 0)
		return 0;
	else if (num === 1)
		return 1;
	else 
		return even_odd_check(num - 2);
}

console.log(even_odd_check(50));
console.log(even_odd_check(-2));