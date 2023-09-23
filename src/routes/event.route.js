const express = require("express");
const { eventValidation } = require("../validations");
const { eventController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create event */
router.post(
  "/create-event",
  validate(eventValidation.createEvent),
  eventController.createEvent
);

/** event list */
router.get(
  "/list",
  eventController.getEventList
)

router.delete(
  "/delete/:eventId",
  eventController.deleteEvent
)

router.put(
  "/update-event/:eventId",
  eventController.updateEvent
)

module.exports = router;