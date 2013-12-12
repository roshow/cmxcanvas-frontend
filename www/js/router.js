//public/js/router.js

define([
  'backbone',
  'handler'
], function(Backbone, handler) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'comic/:id': 'readComic',
      'library': 'loadLibrary',
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){

    var app_router = new AppRouter;

    app_router.on('route:defaultAction', function(action) {
        handler.loadLibrary();
    });
    app_router.on('route:loadLibrary', function() {
        handler.loadLibrary();
    });
    app_router.on('route:readComic', function(id) {
        handler.readComic(id);
    });

    Backbone.history.start();
  
  };
  return { 
    initialize: initialize
  };
});