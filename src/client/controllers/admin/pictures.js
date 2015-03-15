'use strict';

pikucha.controller('AdminPicturesCtrl', ['$scope', 'Picture', async ($scope, Picture) => {
  $scope.pictures = await Picture.all();
  $scope.$apply();

  $scope.upload = async ({name, base64, type}) => {
    let picture = new Picture({title: name, base64, type});
    $scope.pictures.push(await picture.save());
    $scope.$apply();
  };

  $scope.remove = ({id}) => {
    (new Picture({id})).remove();
    _.remove($scope.pictures, {id});
  };
}]);
