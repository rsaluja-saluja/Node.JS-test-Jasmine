const NumberGame = require('../numberGame');

class DummyRandomGenerator {
	constructor() {
		this.range = null
	}

	generateNumber(range) {
		return this.range
	}

	setupData(data) {
		this.range = data
	}
}

describe("Random Number Generator Test", () => {
	let dummyRandomGenerator
	beforeAll(() => {
		dummyRandomGenerator = new DummyRandomGenerator()
	})
	it("Test with less than mid range", () => {
		dummyRandomGenerator.setupData(3)
		const numberGame = new NumberGame(dummyRandomGenerator)
		const result = numberGame.checkNumber(8)
		console.log('RESULT is ' + result)
	});

	it("Test with more than mid range", () => {
		dummyRandomGenerator.setupData(5)
		const numberGame = new NumberGame(dummyRandomGenerator)
		const result = numberGame.checkNumber(8)
		console.log('RESULT is ' + result)
	});

	const scenarios = [
		{ 
			description: 'when less than mid range',
			setNumber: 3,
			expectedResult: 'You Win'
		},
		{ 
			description: 'when more than mid range',
			setNumber: 5,
			expectedResult: 'You Lost'
		}
	]

	scenarios.forEach((scenario) => {
		it(scenario.description, () => {
			dummyRandomGenerator.setupData(scenario.setNumber)
			const numberGame = new NumberGame(dummyRandomGenerator)
			const result = numberGame.checkNumber(8)
			console.log('RESULT is ' + result)

		})
	})
})