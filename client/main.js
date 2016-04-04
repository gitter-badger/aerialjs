import * as Aerial from './aerialjs'


Meteor.call('getAuthRequestConfig', function (error, data) {
    let authReq = data;
    console.log(data);
});

Meteor.call('authClient', function (error, data) {
    console.log(data);
});

// Meteor.subscribe('aerial');

const authRequestWrapper = {
    authenticateClient() {
        Meteor.call('authClient', function (error, data) {
            //get authRequest
        });
    }
}


authConnector = new Aerial.AuthConnector({
    authConnector: authRequestWrapper
});
