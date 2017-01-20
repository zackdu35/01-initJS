// file test/hello.test.js
var expect = require('chai').expect;

describe('Addition testing !', function() {   

	var x = 5;
	var y = 3;
	var total = 8;

	it(`addition ok pour x = ${x} y = ${y}`, function() {     
		expect(x+y).to.equals(total);   
	}) 
});