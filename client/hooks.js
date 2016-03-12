/**
 * Created by faysal on 3/12/16.
 */

var hooksObject = {
    onSuccess: function(formType, result) {
        sAlert.success('Successfully Created your article!');
    },

    // Called when any submit operation fails
    onError: function(formType, error) {
        sAlert.error('Oops! something wrong');
    }

};


// AutoForm Hooks.
AutoForm.hooks({
    insertPostForm: hooksObject
});