var x;
function pipe () {
	x = arguments[0];
	if (arguments.length<2) {
		return x;
	} else {
	for (var i=1; i < arguments.length-1; i++) {
		arguments[i]();
		}
	return arguments[0]+x;
}
}
function addOne () {
	x+=1;
	return x;
}
pipe(1, addOne, addOne);