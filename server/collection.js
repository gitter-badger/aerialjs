'use strict';

export class Collection {
  constructor(collectionName) {
    this.name = collectionName;
    this._addMethods();
  }

  _addMethods() {
    var methods = {};

    methods['/' + this.name + '/update'] = this.update;
    methods['/' + this.name + '/insert'] = this.insert;
    methods['/' + this.name + '/remove'] = this.remove;

    Meteor.methods(methods);
  }

  /*****   This methods are transported by DDP from client to server   *****/

  update() {
    console.log('Update method called');
  }

  insert() {
    console.log('Update method called');
  }

  remove() {
    console.log('Update method called');
  }

  // This method is called from client and it executes update (only if exists) or insert (if not)
  // Aerial.Collection.upsert = function() {};


  /*****   This methods are not transported by DDP from client to server   *****/
  // Aerial.Collection.allow = function() {};
  // Aerial.Collection.deny = function() {};
  // Aerial.Collection.find = function () {};
  // Aerial.Collection.findOne = function () {};
  // Aerial.Collection.rawCollection = function() {};
  // Aerial.Collection.rawDatabase = function() {};

}
