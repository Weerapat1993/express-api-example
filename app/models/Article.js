import Joi from 'joi';
import Model from '../tools/Model';
import ModelBase from '../config/database';

/** @type {Model} */
const Article = ModelBase.extend({
  tableName: 'articles',

  validate: {
    title: Joi.string().required(),
    description: Joi.string().required(),
  },
});

export default Article;