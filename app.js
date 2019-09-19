const http   	   = require('http');
const express 	 = require('express');
const bodyParser = require('body-parser')
const config 		 = require('config');

//Set server.
const app 	 = express();
const server = http.createServer(app);

//Get port.
const port 	 = config.get('server.port')||3000;

//Load api routes.
const routes = require('./routes');

//Bind middlewares.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',routes);

//Inicializo el servidor, escuchando conexiones en el puerto fijado en port.
app.listen(port,(err)=>{

	if (err)
		console.log('ERROR: hubo un problema al inciar el server.');
	else
		console.log('>Listen on port: '+port);

});