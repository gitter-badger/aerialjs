import * as Aerial from './../aerialjs';
import { Collection } from './../collections/Collection';

Meteor.startup(function () {

    let authReq = new Aerial.AuthRequest(Config);


    authRequest = new Aerial.AuthRequest(Config);
});

Meteor.methods({

    setAuthRequestConfig: function (config) {
        //this.config = config;
    },

    getAuthRequestConfig: function () {

        var defaultConfig = {};

        return Config || this.config || defaultConfig;
    },

    createAuthRequest: function () {

        var x = new Aerial.AuthRequest(Config);
        return x;
    },


    authClient: function () {
        // Aerial.AuthRequest.authenticateClient();
    },

    authUser: function () {

        // return Aerial.AuthRequest.authenticateUser(getAuthRequestConfig());
    },

    refreshUserToken: function () {
    },

    logoutUser: function () {
        // AuthRequest.logoutUser();

        authRequest.logoutUser();
    },

    createCollection: function(name) {
       // let col =  new Aerial.Collection(name);

    }
});
