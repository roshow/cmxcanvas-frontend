define([
  'underscore',
  'backbone',
  'models/CmxIssueModel'
], function(_, Backbone, CmxIssueModel){

  var CmxCollection = Backbone.Collection.extend({
      
      model: CmxIssueModel,

      initialize : function(models, options) {
        // console.log('initializing CmxCollections');
      },
      
      url : function() {
        return 'http://cmxcanvas.roshow.net/getallcmx';
      },       
     
  });

  return CmxCollection;

});