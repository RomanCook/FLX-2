const max = +process.argv[2];
let FizzBuzz = {
	[Symbol.iterator]() {
		let i = 1;
		return {
			next() {
				if (i <= max) {
					let check = i;
					if (check % 15 === 0) {
						check = `FizzBuzz`;
					} else if (check % 5 === 0) {
						check = `Buzz`;
					} else if (check % 3 === 0) {
						check = `Fizz`;
					}
					i++;
					return {done: false, value: check};
				} else {
					return {done: true}
				}
			}
		}
	}
}
for (let n of FizzBuzz) {
	console.log(n);
}