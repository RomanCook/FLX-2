	var a = prompt('a =', 0);
	var b = prompt('b =', 0);
	var c = prompt('c =', 0);
	a = Number(a);
	b = Number(b);
	c = Number(c);
	if (isNaN(a) || isNaN(b) || isNaN(c) || a===0) {
		alert('Invalid input data') 
} else {
	var D = b*b - 4*a*c;
			if (D<0) {
				alert('no solution');
} else if (D===0) {
				var x = -b/(2*a);
				alert('x = ' +x) 
} else if (D>0) {
				var x1 = (-b + Math.sqrt(b*b-4*a*c))/(2*a);
				var x2 = (-b - Math.sqrt(b*b-4*a*c))/(2*a); 
				alert('x1 = ' +x1+ ' x2 = ' +x2) 
}
		}
