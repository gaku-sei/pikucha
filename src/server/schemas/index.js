'use strict';

import _ from 'lodash';

const paths = ['picture'];

export default _.transform(paths, (schemas, path) => {
  schemas[path] = require(`./${path}`);
}, {});
