const Joi = require("joi");

/** create category */
const createTeam = {
  body: Joi.object().keys({
    team_name: Joi.string().required().trim(),
    sport: Joi.string().required().trim(),
    foundedYear: Joi.number().integer().required(),
    homeStadium: Joi.string().required().trim(),
    teamColors: Joi.string().required().trim(),
    headCoach: Joi.string().required().trim(),
    captain: Joi.string().required().trim(),
  }),
};

module.exports = {
    createTeam
}