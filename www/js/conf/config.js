define([], function() {

    var prod = {
        api: {
            host: "http://cmxcanvas.roshow.net",
            port: 80
        }
    };
    var local = {
        api: {
            host: 'http://localhost',
            port: 5000
        }
    };


  return local;

});