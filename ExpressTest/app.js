/**
 * http://usejsdoc.org/
 */
var express=require("express");
var expressApp = require("./controllers/expressApp");
var app=express();
expressApp(app);
app.listen(3000);
module.exports = app;