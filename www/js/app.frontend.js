//public/js/app.frontend.js

require.config({
    paths: {
        crossfading: 'libs/crossfading',
        backbone: 'libs/backbone-min',
        bootstrap: 'libs/bootstrap.min',
        jade: 'templates/cmxtemplates',
        jquery: 'libs/jquery-2.0.3.min',
        roshowUtils: 'libs/roshowUtils',
        underscore: 'libs/underscore-min'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        jade: {
            exports: 'jade'
        },
        roshowUtils: {
            exports: 'roshowUtils'
        }
    }
});

require(['router'], function(Router){
    Router.initialize();
    console.log('cmxcanvas-frontend up and running.');
});