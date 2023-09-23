const { Founder } = require("../models");

// Founder
const createFounder = async (reqBody) => {
  return Founder.create(reqBody);
};

// Get founder list
const getFounderList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Founder.find();
};

// Get founder by name
const getFounderByName = async (founder_name) => {
  return Founder.findOne({ founder_name });
};

// Get founder details by id
const getFounderById = async (founderId) => {
  return Founder.findById(founderId);
};

// update founder
const updateDetails = async (founderId, reqBody) => {
  return Founder.findByIdAndUpdate(founderId, { $set: reqBody });
};

// Delete founder
const deleteFounder = async (founderId) => {
  return Founder.findByIdAndDelete(founderId);
};

module.exports = {
    createFounder,
    getFounderList,
    getFounderByName,
    getFounderById,
    updateDetails,
    deleteFounder
}