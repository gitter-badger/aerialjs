import * as Aerial from './aerialjs';

let AerialServerCollection = new Aerial.Collection('aerial');

Meteor.publish('aerial', function(name) {
    console.log(name + ' info has been served.');
    return AerialServerCollection.find();
});
