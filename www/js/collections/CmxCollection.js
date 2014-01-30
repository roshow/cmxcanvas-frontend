define([
  'underscore',
  'backbone',
  'models/CmxIssueModel'
], function(_, Backbone, CmxIssueModel, Conf){

  var CmxCollection = Backbone.Collection.extend({
      
      // model: CmxIssueModel,
      initialize : function(models, options){},
      parse: function(response, options) {
          return response.data;
      },
      url : function() {
        return document.location.origin + '/cmx';
      }
     
  });

  return CmxCollection;

});