Template.post.onCreated(function() {
    var self = this;

    self.subscribe('postList',{ postId: FlowRouter.getParam('_id') });
});


Template.post.helpers({
    post: function() {
        return Posts.findOne();
    },
    isAuthor: function() {
        if( Meteor.user() ) {
            return (Meteor.userId() === this.createdBy._id);
        }

    }
});

Template.post.events({
    'click #removePost' : function(event,template) {
        event.preventDefault();

        if(this.createdBy._id !== Meteor.userId() ) {
            console.log("you're not the author of this post");
        } else {
            Meteor.call('removePost', this._id, function(err) {
                if(!err) {
                    console.log('post removed SuccessFully');
                    FlowRouter.go('/home');
                }
                else {
                    console.log(err);
                }
            });
        }

    }
});