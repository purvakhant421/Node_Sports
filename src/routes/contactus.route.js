const express = require("express");
const { contactusValidation } = require("../validations");
const { contactusController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create contactus */
router.post(
  "/create-contactus",
  validate(contactusValidation.createContactus),
  contactusController.createContactus
);

/** contactus list */
router.get(
  "/list",
  contactusController.getContactusList
)

router.delete(
  "/delete/:contactusId",
  contactusController.deleteContactus
)

router.put(
  "/update-contactus/:contactusId",
  contactusController.updateContactus
)

module.exports = router;