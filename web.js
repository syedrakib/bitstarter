var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
  indexHTML_buffer   = fs.readFileSync('index.html');
  indexHTML_contents = indexHTML_buffer.toString();
  response.send(indexHTML_contents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
