function* upper (items) {
	let temp = null;
	for (let i=0; i<items.length; i++) {
		try {		
			temp = items[i].toUpperCase();
			yield temp;
		} catch (error) {
			temp = null;
			yield temp;
		}
	}
}


let bad_items = ['a', 'B', 1, 'c'];
for (let item of upper(bad_items)) {
	console.log(item);
}