function getMin() {
	for (var i = 0; i < arguments.length-1; i++) {
		for (var j = 0; j< arguments.length-i; j++) {
		if (arguments[j]>arguments[j+1]) {
			var min = arguments[j];
			arguments[j] = arguments[j+1];
			arguments[j+1] = min;
		}
}
}
return arguments[0];
}
getMin(3,0,-3);