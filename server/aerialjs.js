Meteor.publish('aerial', function(name) {
    console.log(name + ' info has been served.');
    return AerialServer.find();
});


Meteor.methods({

    //Method example to try how to create new AuthRequest objects in server side
    logRequest: function () {
        let req = new Aerial.AuthRequest('get');
        console.log(req.type);
        return req.type;
    }
});
