const { Banner } = require("../models");

// Get Banner list
const getbannerlist = async () => {
  return Banner.find().populate("product");
};

// Create banner
const createBanner = async (reqBody) => {
  return Banner.create(reqBody);
};

module.exports = {
    getbannerlist,
    createBanner
};