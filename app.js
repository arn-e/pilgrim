var express = require('express'),
    app = express();

// configuring express
app.use(express.bodyParser());
app.use(express.static(__dirname + '../public'));
app.engine('.html', require('jade').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// default route
app.get('/', function(req, res) {
  res.render('index.jade');
});

// mucking around
function appListen(port) {
  var port = port;
  app.listen(port);
  console.log('Listening on port ' + port + '...');
}

appListen(3001);
