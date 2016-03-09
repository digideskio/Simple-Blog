/**
 * Created by faysal on 3/9/16.
 */

Meteor.publish('postList',function(options) {
    check(options, Match.Optional(Object));

    //var query = _.keys(options);
    //console.log(options, query);

    if(options && _.has(options,'postId')) {
        return Posts.find({_id: options.postId}, {limit: 1} );
    }

    return Posts.find({},{fields: { title: 1, createdAt: 1} });
});