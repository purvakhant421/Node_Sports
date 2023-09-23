const { Player } = require("../models");

// player
const createPlayer = async (reqBody) => {
  return Player.create(reqBody);
};

// Get player list
const getPlayerList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Player.find();
};

// Get player by name
const getPlayerByName = async (player_name) => {
  return Player.findOne({ player_name });
};

// Get Player details by id
const getPlayerById = async (playerId) => {
  return Player.findById(playerId);
};

// update player
const updateDetails = async (playerId, reqBody) => {
  return Player.findByIdAndUpdate(playerId, { $set: reqBody });
};

// Delete player
const deletePlayer = async (playerId) => {
  return Player.findByIdAndDelete(playerId);
};

module.exports = {
    createPlayer,
    getPlayerList,
    getPlayerByName,
    getPlayerById,
    updateDetails,
    deletePlayer
}