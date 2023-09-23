const { Team } = require("../models");

// team
const createTeam = async (reqBody) => {
  return Team.create(reqBody);
};

// Get team list
const getTeamList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Team.find();
};

// Get Team by name
const getTeamByName = async (team_name) => {
  return Team.findOne({ team_name });
};

// Get team details by id
const getTeamById = async (teamId) => {
  return Team.findById(teamId);
};

// update team
const updateDetails = async (teamId, reqBody) => {
  return Team.findByIdAndUpdate(teamId, { $set: reqBody });
};

// Delete team
const deleteTeam = async (teamId) => {
  return Team.findByIdAndDelete(teamId);
};

module.exports = {
    createTeam,
    getTeamList,
    getTeamByName,
    getTeamById,
    updateDetails,
    deleteTeam
}