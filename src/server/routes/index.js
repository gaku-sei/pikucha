'use strict';

export default (app) => {
  Object.keys(app).forEach((key) => {
    require(`./${key}`).forEach((route) => {
      route(app[key]);
    });
  });
};
