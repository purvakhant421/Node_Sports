const Joi = require("joi");

/** create news */
const createNews = {
  body: Joi.object().keys({
    headline: Joi.string().required().trim(),
    date_published: Joi.number().integer().required(),
    author: Joi.string().required().trim(),
    content: Joi.string().required().trim(),
    tags: Joi.string().required().trim(),
  }),
};

module.exports = {
    createNews
}