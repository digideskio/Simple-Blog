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

    },
    hasGivenLike: function() {
        var likes = Posts.findOne().likes;
        if(!Meteor.userId() || !likes) {
            return false;
        }

        return (_.contains(likes,Meteor.userId()));

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

    },
    'click #clickLike': function(event,template) {
        Meteor.call('addLike', this._id, function(err) {
            if(err) {
                sAlert.error(err);
            }
        });
    }
});