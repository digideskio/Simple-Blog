/**
 * Check a user's Authanication
 * @param  {Object}  meteor self Meteor Object
 * @return {Meteor.Error}    Meteor error
 */
SimpleBlog.isAuthorizedUser = function (meteor) {
    if (meteor.userId === null) {
        throw new Meteor.Error(401, 'Unauthorized Access');
    }
};

/**
 * Check a user's Role access Authanication
 * @param  {Meteor}  meteor Meteor object
 * @param  {Array}  roles  roles array
 * @return {Meteor.Error}   Meteor.error
 */
SimpleBlog.isAuthorizedRole = function (meteor, roles) {
    if (!Roles.userIsInRole(meteor.userId, roles)) {
        throw new Meteor.Error(401, 'Unauthorized Role Access');
    }
};