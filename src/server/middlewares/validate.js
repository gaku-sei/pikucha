'use strict';

import Joi from 'joi';

export default (cb) => {
  let schema = cb(Joi);
  return (req, res, next) => {
    Joi.validate(req.body, schema, (err, value) => {
      if(err) {
        res.status(400).send(err);
      } else {
        next();
      }
    });
  };
};
