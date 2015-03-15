'use strict';

import _ from 'lodash';
import path from 'path';
import Sequelize from 'sequelize';
import configs from '../../../config/db.json';

const config = configs[process.env.NODE_ENV || 'development'];
const sequelize = new Sequelize(null, null, null, config);
const files = ['picture'];

export default _.transform(files, (models, file) => {
  let model = sequelize.import(path.resolve(__dirname, file));
  models[model.name] = model;
}, {});
