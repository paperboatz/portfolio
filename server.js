var express = require('express');
var app = express();

//APP CONFIG
app.use(express.static(__dirname));

// LISTEN TO SERVER
app.listen(80, function() {
	console.log('gurrrrl listening to Port 8080, stop with Ctrl + C');
});



