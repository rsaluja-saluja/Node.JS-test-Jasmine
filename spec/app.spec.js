const App = require('../app');

var Request = require('request');

// describe - defines group of tests
// it - defines specific test case
describe("Add Functionality", () => {
	it("calculates x+y = z",  () => {
		expect(App.add(10,5)).toEqual(15);
	});
	it("calculates x+y != z", () => {
		expect(App.add(10,5)).not.toEqual(16);
	});

}); 

/////////////////////////////

describe("Server", () => {
	var server;
	beforeAll(() => {
		server = require('../app').server;
	});
	afterAll(() => {
		server.close();
	});
	describe("GET /",() => {
		var data = {};
		beforeAll((done) => {
			Request.get("http://localhost:3001/",(error,response,body) => {
				data.status = response.statusCode;
				data.body = body;
				done();
			});
		});
		it("Status 200", () => {
			expect(data.status).toBe(200);
		});
		it("Body", () => {
			expect(data.body).toBe("Hello World");
		});
	});

	describe("GET /test",() => {
		var data = {};
		beforeAll((done) => {
			Request.get("http://localhost:3001/test",(error,response,body) => {
				data.status = response.statusCode;
				data.body = JSON.parse(body);
				done();
			});
		});
		it("Status 500", () => {
			expect(data.status).toBe(500);
		});
		it("Body", () => {
			expect(data.body.message).toBe("Error Response");
		});
	})
});