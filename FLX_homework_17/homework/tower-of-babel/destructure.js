let json = {
	'name': {
		'first': 'Yosuke',
		'family': process.argv[2]
	},
	'birth': {
		'year': 1982,
		'month': 12,
		'day': process.argv[3]
	}
}
let {name: {first: first, family: familyName}, birth: {year: year, month: month, day: birthDay}} = json;
console.log(familyName);
console.log(birthDay);