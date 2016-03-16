Aerial.Collection = function (collectionName) {
    this.name = collectionName;
    this._addMethods();

};

Aerial.Collection.prototype._addMethods = function() {

    var methods = {};

    methods['/' + this.name + '/update'] = Aerial.Collection.update;
    methods['/' + this.name + '/insert'] = Aerial.Collection.insert;
    methods['/' + this.name + '/remove'] = Aerial.Collection.remove;

    Meteor.methods(methods);
};

/*****   This methods are transported by DDP from client to server   *****/

Aerial.Collection.update = function () {
    console.log('Update method called');
};

Aerial.Collection.insert = function () {
    console.log('Insert method called');
};

Aerial.Collection.remove = function() {
    console.log('Remove method called');
};

// This method is called from client and it executes update (only if exists) or insert (if not)
// Aerial.Collection.upsert = function() {};


/*****   This methods are not transported by DDP from client to server   *****/
// Aerial.Collection.allow = function() {};
// Aerial.Collection.deny = function() {};
// Aerial.Collection.find = function () {};
// Aerial.Collection.findOne = function () {};
// Aerial.Collection.rawCollection = function() {};
// Aerial.Collection.rawDatabase = function() {};
