const http   	   = require('http');
const express 	 = require('express');
const bodyParser = require('body-parser');
const config     = require('config');

//Set server.
const app 	 = express();
const server = http.createServer(app);

//Get port.
const port 	 = config.get('server.port')||3000;

//Load api routes.
const routes = require('./routes');

//Add CORS to middleware.
const CORS = (req, res, next)=>{

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // Intercepts OPTIONS method
  if ('OPTIONS' === req.method)      
    res.sendStatus(200);
  else
    next();

}

//Bind middlewares.
app.use(CORS);
app.use(bodyParser({limit: '50mb'})); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',routes);

//Inicializo el servidor, escuchando conexiones en el puerto fijado en port.
app.listen(port,(err)=>{

	if (err)
		console.log('ERROR: hubo un problema al inciar el server.');
	else
		console.log('>Listen on port: '+port);

});