const RandomNumberGenerator = require('./RandomNumberGenerator')
const NumberGame = require('./numberGame')

const randomNumberGenerator = new RandomNumberGenerator()
const numberGame = new NumberGame(randomNumberGenerator)

const result = numberGame.checkNumber(10)
console.log('Output ' + result)