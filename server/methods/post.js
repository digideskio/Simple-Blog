Meteor.methods({
    insertPost: function(doc) {
        check(doc,{
           title: String,
           description: String
        });
        Posts.insert(doc);
    },
    removePost: function(postId) {
        try {
            console.log(typeof postId);
            check(postId, String);

            var post = Posts.findOne({_id: postId});

            if(post.createdBy._id !== Meteor.userId()) {
                throw new Meteor.Error(403,'Oops, you are not authorized');
            } else {
                Posts.remove({_id: postId});
            }
        } catch (e) {
            throw  new Meteor.Error(403, e.message);
        }


    },
    addLike: function(postId) {
        try {
            check(postId, String);
            SimpleBlog.isAuthorizedUser(this);

            Posts.update({ _id: postId }, { $addToSet: { likes: this.userId }, $inc: { count: 1 } });

            //Posts.update({ _id: postId }, { $inc: { 'likes.count': 1 }});
            console.log('ended');

        } catch (e) {
            throw  new Meteor.Error(403, e.message);
        }
    }
});