var express = require('express'),
    app = express(),
    _port = 7890;

app.use(express.static(__dirname + '/www'));

app.listen(_port);
app.get('/hello', function(req, res) {
    console.log('handling /');
    res.send('hello');
});
app.get('*', function(req, res) {
    console.log('handling *');
    res.render('index.jade');
});

console.log('cmxcanvas listening on port ' + _port);