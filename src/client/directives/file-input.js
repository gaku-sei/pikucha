'use strict';

pikucha.directive('fileInput', ['File', (File) => {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      ngModel: '='
    },
    template: '<input type="file">',
    link: (scope, element, attrs) => {
      element.on('change', async ({target: {files}}) => {
        if('multiple' in attrs) {
          scope.ngModel = await Promise.all(_.map(files, File.getBase64));
        } else {
          scope.ngModel = await File.getBase64(files[0]);
        }
        scope.$apply();
      });
    }
  };
}]);
