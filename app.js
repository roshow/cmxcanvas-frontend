var express = require('express'),
    request = require('request'),
    app = express(),
    port = process.env.PORT || 7890;

app.use(express.static(__dirname + '/www'));

app.listen(port);

function cmxapiProxy(req, res){
    var url = 'http://cmxcanvasapi.heroku.com/cmx' + (req.params.id ? ('/' + req.params.id) : '');
    request.get(url, function (error, response, body) {
      if (!error) {
        res.send(body);
      }
    });
}
app.get('/cmx/:id', cmxapiProxy);
app.get('/cmx', cmxapiProxy);
app.get('*', function(req, res) {
    console.log('handling *');
    res.render('index.jade');
});

console.log('cmxcanvas listening on port ' + port);