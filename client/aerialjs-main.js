Meteor.call('getBackName', function (error, data) {
    console.log(data + ' Logdata got from server side.');
});


Meteor.subscribe('aerial', AerialClient._name);
