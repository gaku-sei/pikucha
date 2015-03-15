'use strict';

pikucha.factory('Model', ['$resource', ($resource) => {
  return class Model {
    constructor(constructor, object) {
      this.constructor = constructor;
      this.value = new constructor.resource(object);
    };

    save() {
      return this.value.$save();
    };

    remove() {
      return this.value.$remove();
    };

    static get resource() {
      return $resource(this.path, this.defaults, this.actions, this.options);
    };

    static findById(id) {
      return this.resource.get({id: id}).$promise;
    };

    static all() {
      return this.resource.query().$promise;
    };
  };
}]);
