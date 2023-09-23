const { teamService } = require("../services");

/** create team */
const createTeam = async (req, res) => {
  try {
    const reqBody = req.body;
    const team = await teamService.createTeam(reqBody);
    if (!team) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Team create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get team list */
const getTeamList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { team_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await TeamService.getTeamList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get team list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete team */
const deleteTeam = async (req, res) => {
  try {
    const teamId = req.params.teamId;
    const teamExists = await teamService.getTeamById(teamId);
    if (!teamExists) {
      throw new Error("team not found!");
    }
    await teamService.deleteTeam(teamId);

    res.status(200).json({
      success: true,
      message: "Team delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update team */
const updateTeam = async (req, res) => {
  try {
    const reqBody = req.body;
    const teamId = req.params.teamId;
    const teamExists = await teamService.getTeamById(teamId);
    if (!teamExists) {
      throw new Error("Team not found!");
    }
    await teamService.updateDetails(teamId,reqBody);

    res.status(200).json({
      success: true,
      message: "Team update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createTeam,
  getTeamList,
  deleteTeam,
  updateTeam

};