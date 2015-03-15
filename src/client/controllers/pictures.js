'use strict';

pikucha.controller('PicturesShowCtrl', [
  '$scope', '$routeParams', 'Picture',
  async ($scope, $routeParams, Picture) => {
    $scope.picture = await Picture.findById($routeParams.id);
    $scope.$apply();
  }
]);
