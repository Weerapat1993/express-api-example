import Joi from 'joi';
import Model from '../tools/Model';
import ModelBase from '../config/database';

/** @type {Model} */
const User = ModelBase.extend({
  tableName: 'users',

  validate: {
    facebook_id: Joi.string().required(),
    email: Joi.string().required(),
    name: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    avatar: Joi.string(),
    gender: Joi.string(),
    remember_token: Joi.empty(),
  },
});

export default User;
