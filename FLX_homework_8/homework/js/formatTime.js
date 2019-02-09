function formatTime(x) {
	let day, hour = 0;
	if (x/1440 >0) {
		day = Math.floor(x/1440);
		x -= (day*1440);
	}
	if (x/60 > 0) {
		hour = Math.floor(x/60);
		x -= (hour*60);
	}
	return day+' day(s) '+hour+' hour(s) '+x+' minute(s) ';
}
formatTime(1440);