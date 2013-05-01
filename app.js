var express = require('express'),
    mongo_parser = require('./src/mongo_parser'),
    mongohq_connection = require('./src/mongohq_connection'),
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

app.listen(3000);
console.log('Listening on port 3000...');
