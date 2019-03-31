let rawArgs = process.argv.slice(2);
let args = [];
rawArgs.forEach(val=> {
	let commaSep = val.split(',');
	commaSep.forEach(val => {
		if(val !== '') args.push(+val);
	});
});
function avg (...args) {
	let avarage = args.reduce((sum, n) => sum+n);
	return avarage/args.length;
}
console.log(avg(...args));