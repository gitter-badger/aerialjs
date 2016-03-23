Aerial = {
  Collection
};


Collection = class Collection {

  constructor(collectionName) {

    return new Mongo.Collection(collectionName);
  }
}
