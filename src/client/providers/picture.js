'use strict';

pikucha.factory('Picture', ['Model', (Model) => {
  return class Picture extends Model {
    static get path() { return '/api/pictures/:id' };
    static get defaults() { return {id: '@id'} };

    constructor(object) {
      super(Picture, _.pick(object, ['id', 'title', 'base64', 'type']));
    };
  };
}]);
