const Joi = require("joi");

/** create event */
const createEvent = {
  body: Joi.object().keys({
    event_name: Joi.string().required().trim(),
    title: Joi.string().required().trim(),
    location: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    organizer: Joi.string().required().trim(),
  }),
};

module.exports = {
    createEvent
}