const express = require("express");
const auth = require("../middlewares/auth");
const { upload } = require("../middlewares/upload");
const validate = require("../middlewares/validate");
const { bannerValidation } = require("../validations");
const { bannerController } = require("../controllers");

const router = express.Router();

/** Create banner */
router.post(
  "/create",
  auth(),
  upload.single("sports_image"),
  validate(bannerValidation.createBanner),
  bannerController.createBanner
);

/** Get banner list */
router.get(
  "/list",
  validate(bannerValidation.getList),
  bannerController.getbannerlist
);

module.exports = router;