const max = +process.argv[2];
let FizzBuzz = function * () {
	let i = 1;
	while (i<=max) {
		let check = i;
		if (check % 15 === 0) {
			check = `FizzBuzz`;
		} else if (check % 5 === 0) {
			check = `Buzz`;
		} else if (check % 3 === 0) {
			check = `Fizz`;
		}
		i++;
		yield check;
	}
}();
for (let n of FizzBuzz) {
	console.log(n);
}