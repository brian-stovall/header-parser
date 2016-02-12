var express = require('express');
var path = require('path');

var app = express();

app.get('*', (request, response) => {
	//set up response header
	response.setHeader('Content-Type', 'application/json');

	//get the ip address, but cut off the port number
	var ipAddr = request.headers.host;
	ipAddr = ipAddr.slice(0, ipAddr.indexOf(':'));

	//get the accept-language header and slice off the additional data
	var primaryLanguage = request.headers['accept-language'];
	primaryLanguage = primaryLanguage.slice(0, primaryLanguage.indexOf(','));

	//pick the user OS out of the user-agent header info
	var userOS = request.headers['user-agent'];
	userOS = userOS.slice(userOS.indexOf('(') + 1, userOS.indexOf(')'));

	//send it as JSON
	response.write(JSON.stringify({'ipaddress' : ipAddr,
																 'language'  : primaryLanguage ,
																 'software'  : userOS }),
								 (err) => {response.send();});
});


app.listen(process.env.PORT || '8080');
console.log('who-am-I service listening on port 8080');

