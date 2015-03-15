'use strict';

export default (Joi) => Joi.object().keys({
  title: Joi.string().required(),
  type: Joi.string().required(),
  base64: Joi.string().required()
}).required();
