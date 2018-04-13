var assert    = require("chai").assert;
var asyncSum = require("../app/asyncTest");

describe("asyncTest tests using ASSERT interface from CHAI module: ", function() {
	describe("Check asyncSum Function: ", ()=> {
		it("test async: ", async function() {
			result   =await asyncSum.asyncSum(4,6);
			assert.equal(result, 11);
		});					
	});		
	
	
	
	
});