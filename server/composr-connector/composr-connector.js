import * as Aerial from './../aerialjs';
import { Collection } from './../collections/Collection';

Meteor.startup(function () {

    let authReq = new Aerial.AuthRequest(Config);


    authRequest = new Aerial.AuthRequest(Config);
});

let methods = {};


methods.setAuthRequestConfig = function (config) {

};

methods.getAuthRequestConfig = function () {

    var defaultConfig = {};
    return Config || this.config || defaultConfig;
}

methods.authValidation = function () {

};

methods.createAuthRequest = function () {
    return new Aerial.AuthRequest(Config);
};

methods.authClient = function () {

};

methods.authUser = function () {

};

methods.refreshUserToken = function () {

};

methods.logoutUser = function () {

};

methods.createCollection = function () {

};

Meteor.methods(methods);
