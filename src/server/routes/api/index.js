'use strict';

const paths = ['pictures'];

export default paths.reduce((agg, path) =>
  agg.concat(require(`./${path}`)),
[]);
