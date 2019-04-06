let startGame= (option) => {
	winnerBox.innerHTML = ``;
	let randomOption = items[Math.floor(Math.random()*items.length)];
	let customerOption = option.id;
	if ((customerOption=='Rock' && randomOption =='Scissors') || 
		(customerOption=='Scissors' && randomOption =='Paper') ||
		(customerOption=='Paper' && randomOption =='Rock')) {
		resultBox.innerHTML = `
			<div class='round-text'><h3>Round ${currentRound}</h3>
			<p><span class='vs1'>${customerOption}</span> vs. <span class='vs2'>${randomOption}</span> !</p>
			<span class='won'> You WON!</span></div>`;
		yourScore++;
		currentRound++;
		} else if ((customerOption=='Scissors' && randomOption =='Rock') || 
		(customerOption=='Paper' && randomOption =='Scissors') ||
		(customerOption=='Rock' && randomOption =='Paper')) {
		resultBox.innerHTML = `
			<div class='round-text'><h3>Round ${currentRound}</h3>
			<p><span class='vs1'>${customerOption}</span> vs. <span class='vs2'>${randomOption}</span> !</p>
			<span class='lost'> You LOST!</span></div>`;
		compScore++;
		currentRound++;
		} else {
		resultBox.innerHTML = `
			<div class='round-text'><h3>Round ${currentRound}</h3>
			<p><span class='vs1'>${customerOption}</span> vs. <span class='vs2'>${randomOption}</span> !</p>
			<span class='draw'>Draw! Try again.</span></div>`;
	}
guessWinner();
}

let guessWinner = () => {
	if (yourScore == 2)  {
		winnerBox.innerHTML = `
			<div class='round-text'><h3>Game over!</h3>
			<p><span class='won'>You are the WINNER!</span><br>
			Wanna try again? Just choose Rock, paper or Scissors.</p></div>
			`;
		resetScore();
		} else if (compScore == 2) {
		winnerBox.innerHTML = `
		<div class='round-text'><h3>Game over!</h3>
			<p><span class='lost'>You lost! AI is better than you.</span><br>
			Wanna try again? Just choose Rock, paper or Scissors.</p></div>
			`;
		resetScore();
	}
}
