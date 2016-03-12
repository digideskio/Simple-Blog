/**
 * Created by faysal on 3/12/16.
 */

Meteor.startup(function() {
    sAlert.config({
        effect: 'scale',
        position: 'bottom-right',
        timeout: 5000,
        html: false,
        onRouteClose: false,
        stack: true,
        offset: 0, // in px - will be added to first alert (bottom or top - depends of the position in config)
        beep: false
    });
});