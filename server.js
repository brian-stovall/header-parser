var express = require('express');
var path = require('path');

var app = express();

app.get('*', (request, response) => {
	//set up response header
	response.setHeader('Content-Type', 'application/json');
	response.write(JSON.stringify({'ipaddress'   : null,
																 'language': null,
																 'software' : null}),
								 (err) => {response.send();});
});


app.listen(process.env.PORT || '8080');
console.log('timestamp service listening on port 8080');

