'use strict';

pikucha.factory('File', [() => {
  return {
    getBase64(file) {
      return new Promise((resolve, reject) => {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onloadend = ({target: {result}}) => {
          resolve(_.merge(_.pick(file, ['name', 'type', 'size']), {base64: result}));
        };
        fileReader.onerror = reject;
      });
    }
  };
}]);
