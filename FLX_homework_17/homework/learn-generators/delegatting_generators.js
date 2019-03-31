function* flat (arr) {
	let newArr = arr;
	for(let i=0; i<newArr.length; i++) {
		if (typeof newArr[i] == 'object') {
			yield *flat(newArr[i]);
		} else {
			yield newArr[i];
		}
	}
}

let A = [1, [2, [3, 4], 5], 6];
for (let f of flat (A)) {
	console.log(f);
}