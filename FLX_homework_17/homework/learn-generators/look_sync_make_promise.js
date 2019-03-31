function askFoo () {
	return new Promise(function (resolve, reject) {
		resolve('foo');
	});
}

function run (generator) {
	//
}

run (function* () {
	//
	let foo = yield askFoo();
	console.log(foo);
}