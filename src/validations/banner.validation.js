const Joi = require("joi");

/** Create Banner */
const createBanner = {
  body: Joi.object({
    banner_name: Joi.string().required().trim(),
    banner_description: Joi.string().required().optional(),
    sports_image: Joi.string().allow(""),
  }),
};

/** Get Banner list */
const getList = {
  query: Joi.object({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

module.exports = {
  createBanner,
  getList,
};