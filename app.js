var express = require('express'),
    exphbs  = require('express3-handlebars'),

    app = express();


// configuring express
app.use(express.bodyParser());
app.use(express.static(__dirname + '../public'));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// default route
app.get('/', function(req, res) {
  res.render('index');
});

// mucking around
function appListen(port) {
  var port = port;
  app.listen(port);
  console.log('Listening on port ' + port + '...');
}

appListen(3001);
