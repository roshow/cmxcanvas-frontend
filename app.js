var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/www'));

app.listen(process.env.PORT || 7890);

app.get('*', function(req, res) {
    console.log('handling *');
    res.render('index.jade');
});

console.log('cmxcanvas listening on port ' + _port);