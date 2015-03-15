'use strict';

import _ from 'lodash';
import {Picture} from '../../models';
import schemas from '../../schemas';
import validate from '../../middlewares/validate';

export default (api) => {
  api.route('/pictures')
    .get(async (req, res) => {
      res.json(await Picture.findAll());
    })
    .post(validate(schemas.picture), async (req, res) => {
      let now = new Date();
      res.json(await Picture.create(_.merge(req.body, {
        createdAt: now,
        updatedAt: now
      })));
    });

  api.route('/pictures/:id')
    .get(async (req, res) => {
      res.json(await Picture.find(req.params.id));
    })
    .delete(async (req, res) => {
      res.json(await Picture.destroy({where: req.params}));
    });
};
