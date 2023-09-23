const express = require("express");
const { teamValidation } = require("../validations");
const { teamController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create team */
router.post(
  "/create-team",
  validate(teamValidation.createTeam),
  TeamController.createTeam
);

/** team list */
router.get(
  "/list",
  teamController.getTeamList
)

router.delete(
  "/delete/:teamId",
  teamController.deleteTeam
)

router.put(
  "/update-team/:teamId",
  teamController.updateTeam
)

module.exports = router;