const { News } = require("../models");

// News
const createNews = async (reqBody) => {
  return News.create(reqBody);
};

// Get news list
const getNewsList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return News.find();
};

// Get News by name
const getNewsByName = async (headline) => {
  return News.findOne({ headline });
};

// Get news details by id
const getNewsById = async (newsId) => {
  return News.findById(newsId);
};

// update news
const updateDetails = async (newsId, reqBody) => {
  return News.findByIdAndUpdate(newsId, { $set: reqBody });
};

// Delete news
const deleteNews = async (newsId) => {
  return News.findByIdAndDelete(newsId);
};

module.exports = {
    createNews,
    getNewsList,
    getNewsByName,
    getNewsById,
    updateDetails,
    deleteNews
}