let resetGame =  () => {
	currentRound = 1, yourScore = 0, compScore = 0;
	result.innerHTML = ``;
	winner.innerHTML = ``;
	showRoundCounter();
}

let resetScore = () => {
	result.innerHTML = ``;
	yourScore = 0, compScore = 0, currentRound = 1;
}