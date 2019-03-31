let obj = {
	[+process.argv[3] + +process.argv[2]]: +process.argv[3] + +process.argv[2],
	[(() => {if(+process.argv[2] % 2 === 0) {return 'even'} else {return 'odd'}})()]: +process.argv[2]
}
console.log(obj);