let conf = confirm('Do you want to play a game?');
if (conf) {
	while (conf) {
		let totalPrice = 0;
		let currentPrice = 0;
		let possiblePrice = 10;
		let range = 5;
		let numb = Math.floor(Math.random()*range)+1;
		for (var att = 3; att >= 1;att--) {
			switch (att) {
				case 3: currentPrice = possiblePrice;
				break;
				case 2: currentPrice = possiblePrice/2;
				break;
				case 1: currentPrice = Math.floor((possiblePrice/2)/2);
				break;
				default: totalPrice +=0; 
				break;
		}
			let numbUser = prompt('Enter a number from 0 to '+range+
				'\nAttempts left: '+att+
				'\nTotal price: '+totalPrice+
				'\nPossible price on current attempt: '+currentPrice, 0);
			numbUser = Number(numbUser);
			if (numb===numbUser) {
				var win = true;
				totalPrice += currentPrice;
				break;
			}
}
if (att===0) {
	alert('Thank you for a game. Your prize is: '+totalPrice+'$');
    conf = confirm('Do you want to play a game?');
} else if (win === true) {
	win2 = confirm('Congratulation! \nYour prize is:' +totalPrice+ '$.\nDo you want to continue?');
	while (win2===true) {
		possiblePrice *= 3;
		range *=2;
		let numb = Math.floor(Math.random()*range)+1;
		for (att = 3; att >= 1;) {
			switch (att) {
				case 3: currentPrice = possiblePrice;
				break;
				case 2: currentPrice = possiblePrice/2;
				break;
				case 1: currentPrice = Math.floor((possiblePrice/2)/2);
				break;
				default: totalPrice +=0; 
				break;
		}
			let numbUser = prompt('Enter a number from 0 to '+range+
				'\nAttempts left: '+att+
				'\nTotal price: '+totalPrice+
				'\nPossible price on current attempt: '+currentPrice, 0);
			numbUser = Number(numbUser);
			if (numb===numbUser) {
				totalPrice += currentPrice;
				win2 = confirm('Congratulation! \nYour prize is:' +totalPrice+ '$.\nDo you want to continue?');
				break;
			} else {
				var win2 = false;
				att--; 
}
	}
} alert('Thank you for a game. Your prize is: '+totalPrice+'$');
  conf = confirm('Do you want to play a game?');
} else {
	alert('Thank you for a game. Your prize is: '+totalPrice+'$');
	}
}
} else {
alert('You did not become a millionaire, but can.');
}