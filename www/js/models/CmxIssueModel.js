define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  var CmxIssueModel = Backbone.Model.extend({
      initialize : function() {
        //Ready to do something, whatever you need, if you ever want me to. *Sigh...*
      },
          
      urlRoot: 'http://cmxcanvas.roshow.net/getcmxjson'
  });

  return CmxIssueModel;

});