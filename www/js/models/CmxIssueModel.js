define([
  'underscore',
  'backbone',
  'conf/config'
], function(_, Backbone, Conf) {

  var CmxIssueModel = Backbone.Model.extend({
      initialize : function() {
        //Ready to do something, whatever you need, if you ever want me to. *Sigh...*
      },
      parse: function(response, options) {
          return response.data[0];
      },
          
      urlRoot: Conf.api.host + ':' + Conf.api.port + '/cmx'
  });

  return CmxIssueModel;

});