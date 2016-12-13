/**
 * http://usejsdoc.org/
 */
module.exports=function(app){
	app.get("/name",function(req,res){
		console.log("****************");
		res.send("babak");
	});
}