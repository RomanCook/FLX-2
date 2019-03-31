let fs = require('fs');
function run (generator) {
	let it = generator(go);
	function go (err, result) {
		if(err) {
			return it.throw(result);
		}
		it.next(result);
	}
go();
}
run (function* (done) {
	let firstFile = null;
	try {
		let dirFiles = yield fs.deaddir('NoNoNoNo', done);
		firstFile = dirFiles[0]; 
	} catch (err) {
		firstFile = null;
	}
	console.log(firstFile);
});