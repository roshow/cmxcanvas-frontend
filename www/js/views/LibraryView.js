define([
  'jquery',
  'underscore',
  'backbone',
  'jade',
  'bootstrap'
], function($, _, Backbone, jade, bootstrap) {

    var LibraryView = Backbone.View.extend({
    
        el: $('#CmxCanvas'),
        initialize: function(){},
        render: function() {
            var issuesAvail = this.collection.where({published: 1});
            this.$el.html(
              jade.templates['library']({
                issues: issuesAvail
              })
            );
            $('li.libNav').addClass('active');
        },

        events: {
            'click .col-sm-4.issueEntry': 'goToComic'
        },
        goToComic: function(e){
            $('li.libNav').removeClass('active');
        }


    });

    return LibraryView;
});