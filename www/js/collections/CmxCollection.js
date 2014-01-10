define([
  'underscore',
  'backbone',
  'models/CmxIssueModel',
  'conf/config'
], function(_, Backbone, CmxIssueModel, Conf){

  var CmxCollection = Backbone.Collection.extend({
      
      // model: CmxIssueModel,
      initialize : function(models, options){},
      parse: function(response, options) {
          return response.data;
      },
      url : function() {
        return Conf.api.host + ':' + Conf.api.port + '/cmx';
      }
     
  });

  return CmxCollection;

});