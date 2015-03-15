'use strict';

const paths = ['home'];

export default paths.reduce((agg, path) =>
  agg.concat(require(`./${path}`)),
[]);
