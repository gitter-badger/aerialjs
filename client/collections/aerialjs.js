Collection = class Collection {

    constructor(collectionName) {
        return new Mongo.Collection(collectionName);
    }
};

//Expose Aerial
Aerial = {
    Collection,
    AuthPersist,
    AuthConnector
};

//Expose AerialClient
AerialClient = new Aerial.Collection('aerial');
