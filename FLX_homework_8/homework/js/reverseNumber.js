function reverseNumber (num) {
	var rev = 0;
	if (num<0) {
		num*= -1;
	while (num > 0) {
		rev = rev*10 + num%10;
		num = Math.floor(num/10);
	}
	rev *= -1;
	return rev;
} else {
	while (num > 0) {
		rev = rev*10 + num%10;
		num = Math.floor(num/10);
	}
	return rev;
}
}
reverseNumber(123);