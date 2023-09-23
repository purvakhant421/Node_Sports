const express = require("express");
const { playerValidation } = require("../validations");
const { playerController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create player */
router.post(
  "/create-player",
  validate(playerValidation.createPlayer),
  playerController.createPlayer
);

/** player list */
router.get(
  "/list",
  playerController.getPlayerList
)

router.delete(
  "/delete/:playerId",
  playerController.deletePlayer
)

router.put(
  "/update-player/:playerId",
  playerController.updatePlayer
)

module.exports = router;