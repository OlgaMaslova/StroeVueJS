
const express = require("express")
const webpack = require("webpack")
const config = require("./webpack.config")

//------------------------------------
webpack(config, function(err,stats) {
	if (err || stats.hasErrors()) {
 		console.log("error compiling :(");
  		console.log(stats);
  	}

	console.log("Compiled :) " + new Date());
})
//-------------------------------------

var app = express()
app.use("/css",express.static(__dirname + "/css"));
app.use("/js",express.static(__dirname + "/dist"));

app.get("/", function(req,res) {
	res.sendFile(__dirname+"/index.html");
})


app.get("/products", function(req, res) {
	res.json([
		{ name: 'Chimay bleue', 
		  color: 'Brune', 
		  price: 1.5  },
		{ name: 'Duvel', 
		  color: 'Blonde', 
		  price: 2 },
	])
})

app.listen(8080)
