var express = require('express'),
    app = express(),
    _port = 9999;

app.use(express.static(__dirname + '/www'));

app.listen(_port);
app.get('*', function(req, res) {
    console.log('handling /');
    res.render('index.jade');
});

console.log('cmxcanvas listening on port ' + _port);