var express = require('express');
var app = express();

// app.get('/', function(req, res){
//   res.send('Hello World');
// });

// app.use('/', function(req, res, next){
//   next();
// });
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/app'));

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

//app.use(express.static(__dirname + '/app'));

// var server = app.listen(3000, function() {
//     console.log('Listening on port %d', server.address().port);
//     console.log('Yay!');
// });