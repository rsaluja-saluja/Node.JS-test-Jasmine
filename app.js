const express = require('express');
const numberGame = require('./numberGame');
const randomNumberGenerator = require('./RandomNumberGenerator');

const app = express();
const RandomNumberGenerator = new randomNumberGenerator();
const NumberGame = new numberGame(RandomNumberGenerator);

//////////////////////

let add = (x,y) => { 
	return x+y;
}


//////////////////////

app.get('/', (req,res) => {
	res.status(200).send("Hello World");
});

app.get('/test', (req,res) => {
	res.status(500).send({"message" : "Error Response"});
});

app.get('/numberGame/:range',(req,res) => {
	console.log("Range: "+req.params.range);
	const message = NumberGame.checkNumber(req.params.range);
	res.status(200).send({"message:" : message});
})

var server = app.listen(3001, () => {
	console.log("Listening on port "+server.address().port +"....");
});


module.exports = { add, server};