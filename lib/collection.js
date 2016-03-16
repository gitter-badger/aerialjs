Aerial.Collection = function (collectionName) {
    this.name = collectionName;
    this._addMethods();

};

Aerial.Collection.prototype._addMethods = function() {

    var methods = {};

    methods['/' + this.name + '/insert'] = Aerial.Collection.insert;
    methods['/' + this.name + '/update'] = Aerial.Collection.update;
    methods['/' + this.name + '/find'] = Aerial.Collection.find;
    methods['/' + this.name + '/findOne'] = Aerial.Collection.findOne;

    Meteor.methods(methods);
};

Aerial.Collection.find = function () {

    console.log('find method called');
};

Aerial.Collection.findOne = function () {

    console.log('findOne method called');
};

Aerial.Collection.update = function () {

    console.log('update method called');
};

Aerial.Collection.insert = function () {

    console.log('Insert method called');
};
