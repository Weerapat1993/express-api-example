import Joi from 'joi';
import Model from '../tools/Model';
import ModelBase from '../config/database';

/** @type {Model} */
const User = ModelBase.extend({
  tableName: 'users',

  validate: {
    email: Joi.string().required(),
    name: Joi.string().required(),
    avatar: Joi.string(),
  },
});

export default User;
