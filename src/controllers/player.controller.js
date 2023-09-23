const { playerService } = require("../services");

/** create player */
const createPlayer = async (req, res) => {
  try {
    const reqBody = req.body;
    const player = await playerService.createPlayer(reqBody);
    if (!player) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Player create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get player list */
const getPlayerList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { player_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await playerService.getPlayerList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get player list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete player */
const deletePlayer = async (req, res) => {
  try {
    const playerId = req.params.playerId;
    const playerExists = await playerService.getPlayerById(playerId);
    if (!playerExists) {
      throw new Error("player not found!");
    }
    await playerService.deletePlayer(playerId);

    res.status(200).json({
      success: true,
      message: "Player delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update player */
const updatePlayer = async (req, res) => {
  try {
    const reqBody = req.body;
    const playerId = req.params.playerId;
    const playerExists = await playerService.getPlayerById(playerId);
    if (!playerExists) {
      throw new Error("Player not found!");
    }
    await playerService.updateDetails(playerId,reqBody);

    res.status(200).json({
      success: true,
      message: "Player update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createPlayer,
  getPlayerList,
  deletePlayer,
  updatePlayer
};