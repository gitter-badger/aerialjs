import * as Aerial from './../aerialjs';
import { Collection } from './../collections/Collection';

Meteor.startup(function () {

    let authReq = new Aerial.AuthRequest(Config);


    authRequest = new Aerial.AuthRequest(Config);
});

let methods = {};


/////////////////////////
//////   Methods   //////
/////////////////////////

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

methods.loginClient = function () {

};

methods.loginUser = function () {

};

methods.refreshUserToken = function () {

};

methods.logoutUser = function () {

};


//////////////////////
//////Collection//////
//////////////////////

methods.createCollection = function (name) {
    //TODO: Make this collection as global
    let col = new Aerial.Collection(name);
};

Meteor.methods(methods);
