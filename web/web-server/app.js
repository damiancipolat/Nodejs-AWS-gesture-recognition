const express = require("express");
const app       = express();
const config	 = require('./config.js');

//Bindeo la ruta y obtengo el archivo, lo devuelvo por socket al browser.
 app.get(/^(.+)$/, function(req, res)
 { 
     console.log('>> Static file request : ' + req.params);
	 
     //res.sendfile( __dirname + req.params[0]); 
	 res.sendfile( config.path+ req.params[0]); 
 });

 var port = process.env.PORT || 5000;
 
 app.listen(port, function()
 {
	console.log('=================================');
	console.log('');
	console.log('     Simple Web Server :P');
	console.log("     Listening on " + port);
	console.log("     By Damian Cipolat");	
	console.log('');	
	console.log('=================================');	   
 });
