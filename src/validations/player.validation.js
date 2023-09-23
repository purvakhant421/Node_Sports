const Joi = require("joi");

/** create player */
const createPlayer = {
  body: Joi.object().keys({
    player_name: Joi.string().required().trim(),
    sport: Joi.string().required().trim(),
    position: Joi.string().required().trim(),
    jerseyNumber: Joi.number().integer().required(),
    birthDate: Joi.number().integer().required(),
    height_weight: Joi.string().required().trim(),
    nationality: Joi.string().required().trim(),
    college: Joi.string().required().trim(),
  }),
};

module.exports = {
    createPlayer
}