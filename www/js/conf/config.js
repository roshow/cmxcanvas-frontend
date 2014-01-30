define([], function() {

    var prod = {
        api: {
            host: "http://cmxcanvas.roshow.com",
            port: 80
        }
    };
    var local = {
        api: {
            host: 'http://localhost',
            port: 7890
        }
    };


  return local;

});