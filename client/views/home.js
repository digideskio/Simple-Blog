/**
 * Created by faysal on 3/9/16.
 */

Template.home.onCreated(function () {
   var self = this;

   self.subscribe('postList');
});

Template.home.helpers({
   posts: function() {
      return Posts.find({},{ sort:{ createdAt: -1} } );
   }
});