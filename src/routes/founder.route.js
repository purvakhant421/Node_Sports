const express = require("express");
const { founderValidation } = require("../validations");
const { founderController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create founder */
router.post(
  "/create-founder",
  validate(founderValidation.createFounder),
  founderController.createFounder
);

/** founder list */
router.get(
  "/list",
  founderController.getFounderList
)

router.delete(
  "/delete/:founderId",
  founderController.deleteFounder
)

router.put(
  "/update-founder/:founderId",
  founderController.updateFounder
)

module.exports = router;