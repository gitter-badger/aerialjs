
Meteor.publish('aerial', function(name) {
    console.log(name + ' info has been served.');
    return AerialServer.find();
});
