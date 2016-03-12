/**
 * Created by faysal on 3/9/16.
 */

Template.home.onCreated(function () {
   var self = this;

   SEO.set({
      title: 'Simple blog for audience with minimalistic preference',
      description: 'welcome to SSB',
      meta: {
         'property="og:image"': 'http://ssb.meteor.com/imgs/sb.png'
      }
   });

   self.subscribe('postList');
});

Template.home.helpers({
   posts: function() {
      return Posts.find({},{ sort:{ createdAt: -1} } );
   }
});