/**
 * http://usejsdoc.org/
 */
var expect=require("chai").expect;
var adder=require("../app.js");
describe("adder",function(){
	it("should add 2 and 3",function(done){
		var result=adder.add(2, 3);
		//expect((5).to.equal(5));
		done();
		(result).should.equal(5);
		
	});
});
//mocha -R spec -b test.js