class NumberGame {
	constructor(numberGenerator) {
		this.numberGenerator = numberGenerator;
	}

	checkNumber(range) {
		const randomNumber = this.numberGenerator.generateNumber(range)
		console.log('VALUE IS ' + randomNumber)
		if (randomNumber === 0) {
			return 'Roll the dice again';
		} else {
			const range2 = range /2;
			if(randomNumber > range2) {
				return "You win the game";
			} else {
				return "You lost the game";
			}
		}
	}
}

module.exports = NumberGame

