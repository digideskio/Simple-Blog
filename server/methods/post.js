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


    }
});