define([
  'underscore',
  'backbone',
  'models/CmxIssueModel',
  'conf/config'
], function(_, Backbone, CmxIssueModel, Conf){

  var CmxCollection = Backbone.Collection.extend({
      
      model: CmxIssueModel,

      initialize : function(models, options) {
        // console.log('initializing CmxCollections');
      },
      
      url : function() {
        return Conf.api.host + ':' + Conf.api.port + '/getallcmx';
      },       
     
  });

  return CmxCollection;

});