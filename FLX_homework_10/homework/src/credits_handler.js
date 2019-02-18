function userCard (index) {
	let cardOptions = {
		balance: 100,
		transationLimit: 100,
		historyLogs: [],
		key: index
	};
	function logFile (typeName, creditAmount, time) {
		return {
			operationType: typeName,
			credits: creditAmount,
			operetionTime: time
		}
	}
	let unbelievableZero = 0;
	let cardMethods = {
		getCardOptions: function() {
		return cardOptions;
		},
		putCredits: function (creditAmount) {
			if (creditAmount > unbelievableZero) {
				const log = logFile('Receaving credits', creditAmount, new Date().toLocaleString('en-GB'));
				cardOptions.historyLogs.push(log);
				cardOptions.balance+=creditAmount
				return `balance: ${cardOptions.balance}`;
				} else {
				console.error('You can`t put less than 1');
			}
		},
		takeCredits: function (creditAmount) {
			if (cardOptions.balance > creditAmount && cardOptions.transationLimit > creditAmount ) {
				const log = logFile('Withrawal of credits', creditAmount, new Date().toLocaleString('en-GB'));
				cardOptions.historyLogs.push(log);
				cardOptions.balance-=creditAmount
				return `balance: ${cardOptions.balance}`;
			} else {
				console.error('You can`t take the credit');
			}
		},
		setTransactionLimit: function (creditAmount) {
			cardOptions.transationLimit = creditAmount;
			const log = logFile('Transation limit change', creditAmount, new Date().toLocaleString('en-GB'));
			cardOptions.historyLogs.push(log);
			return `you set the new transation limit: ${cardOptions.transationLimit}`;
		},
		transferCredits: function (creditAmount, cardIndex) {
			let tax = 0.005;
			let withTaxCredits = creditAmount + creditAmount*tax;
			if (withTaxCredits < cardOptions.balance && withTaxCredits < cardOptions.transationLimit) {
				this.takeCredits(withTaxCredits);
				cardIndex.putCredits(creditAmount);
				return `Your balance after transfer: ${cardOptions.balance}.`;
			} else {
				console.error('You can`t transfer the credit');
			}		
		}
	}
	return cardMethods;
}


const cardLimit = 3;
function userAccount (name) {
	let userProperties = {
		name: name,
		cards: []
	};
	let userMethods = {
		addCard: function () {
			if (userProperties.cards.length < cardLimit) {
			userProperties.cards.push(userCard());
		} else {
			console.error('You can`t have more than 3 cards.');
		}
	},
	getCardByKey: function (index) {
		return userProperties.cards[index-1];
	}
}
return userMethods;
}