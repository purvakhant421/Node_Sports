const { Contactus } = require("../models");

// contactus
const createContactus = async (reqBody) => {
  return Contactus.create(reqBody);
};

// Get contactus list
const getContactusList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Contactus.find();
};

// Get Contactus by name
const getContactusByName = async (organizationName) => {
  return Contactus.findOne({ organizationName });
};

// Get Contactus details by id
const getContactusById = async (contactusId) => {
  return Contactus.findById(contactusId);
};

// update contactus
const updateDetails = async (contactusId, reqBody) => {
  return Contactus.findByIdAndUpdate(contactusId, { $set: reqBody });
};

// Delete contactus
const deleteContactus = async (contactusId) => {
  return Contactus.findByIdAndDelete(contactusId);
};

module.exports = {
    createContactus,
    getContactusList,
    getContactusByName,
    getContactusById,
    updateDetails,
    deleteContactus
}