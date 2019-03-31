function* range (from, to) {
	let fromN = from;
	while (fromN<=to)
		yield fromN++;
}
for (let r of range (5, 10)) {
	console.log(r);
}