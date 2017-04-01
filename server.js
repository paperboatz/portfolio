var express = require('express');
var app = express();

//APP CONFIG
app.use(express.static(__dirname));;


// Anything that is not a static file name
// send to error page 
app.get('/*', function(req, res){
  res.redirect('/partials/error404.html');
});

// LISTEN TO SERVER
app.listen(80, function() {
  console.log('gurrrrl listening to Port 8080, stop with Ctrl + C');
});



