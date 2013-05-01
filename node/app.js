var express = require('express'),
    app = express();

app.get('/', function(req, res) {
  res.render('index.jade');
});

app.listen(3000);
console.log('Listening on port 3000...');
