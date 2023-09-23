const Joi = require("joi");

/** create founder */
const createFounder = {
  body: Joi.object().keys({
    founder_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    company: Joi.string().required().trim(),
    position: Joi.string().required().trim(),
    location: Joi.string().required().trim(),
    achievements: Joi.string().required().trim(),
    bio: Joi.string().required().trim(),
  }),
};

module.exports = {
    createFounder
}