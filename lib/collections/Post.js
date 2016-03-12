Schemas = {};

Posts = new Mongo.Collection('posts');

Schemas.Post = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 50
    },
    description: {
        type: String,
        label: "Description",
        max: 500
    },
    createdBy: {
        type: Object,
        blackbox: true,
        autoValue: function () {
            if (this.isInsert) {
                return SimpleBlog.userDetail(Meteor.user());
            }
        },
        denyUpdate: true,
        optional: true
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            if (this.isInsert) {
                return new Date();
            }
            if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            }
            this.unset();
        },
        denyUpdate: true,
        optional: true
    },
    likes: {
        type: [String],
        optional: true
    },
    count: {
        type: Number,
        defaultValue: 0
    }

});

Posts.attachSchema(Schemas.Post);