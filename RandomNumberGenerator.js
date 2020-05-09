class RandomNumberGenerator {
	constructor() {
	}
	
	generateNumber(range) {
		const number = Math.floor(Math.random() * range);
		console.log('number is ' + number)
		return number
	}

}

module.exports = RandomNumberGenerator;