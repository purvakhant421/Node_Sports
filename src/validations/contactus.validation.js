const Joi = require("joi");

/** create contactus */
const createContactus = {
  body: Joi.object().keys({
    organizationName: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
    phone: Joi.number().integer().required(),
    email: Joi.string().required().trim(),
  }),
};

module.exports = {
    createContactus
}