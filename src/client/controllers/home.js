'use strict';

pikucha.controller('HomeCtrl', ['$scope', 'Picture', async ($scope, Picture) => {
  $scope.pictures = await Picture.all();
  $scope.$apply();
}]);
