class Collection {

    constructor(collectionName) {
        this._createServerCollection(collectionName);
        return new Mongo.Collection(collectionName || 'aerialCollection');
    }

    _createServerCollection(name) {
        Meteor.call('createCollection', name);
    }
};

export default Collection;
