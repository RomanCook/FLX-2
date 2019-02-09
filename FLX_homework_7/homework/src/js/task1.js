let userName = prompt('input your username', '');
userName.toString();
if (userName === 'User' || userName === 'Admin') {
	let pass = prompt('input your password', '');
	if (userName === 'User' && pass === 'UserPass' || 
		userName === 'Admin' && pass === 'RootPass' ) {
	alert(new Date().getHours() <= 19 ? "Good day, dear "+userName+ "!" : "Good evening, dear "+userName+ "!")
} else if (pass === '' || pass === null) {
	alert("Canceled")
} else {
	alert("Wrong password")
}
} else if (userName.length < 4) {
	alert("I don't know any users having name length less than 4 symbols");
} else {
	alert("I don’t know you");
}
