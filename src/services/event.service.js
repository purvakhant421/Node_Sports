const { Event } = require("../models");

// event
const createEvent = async (reqBody) => {
  return Event.create(reqBody);
};

// Get event list
const getEventList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Event.find();
};

// Get event by name
const getEventByName = async (event_name) => {
  return Event.findOne({ event_name });
};

// Get event details by id
const getEventById = async (eventId) => {
  return Event.findById(eventId);
};

// update event
const updateDetails = async (eventId, reqBody) => {
  return Event.findByIdAndUpdate(eventId, { $set: reqBody });
};

// Delete event
const deleteEvent = async (eventId) => {
  return Event.findByIdAndDelete(eventId);
};

module.exports = {
    createEvent,
    getEventList,
    getEventByName,
    getEventById,
    updateDetails,
    deleteEvent
}