const { eventService } = require("../services");

/** create event */
const createEvent = async (req, res) => {
  try {
    const reqBody = req.body;
    const event = await eventService.createEvent(reqBody);
    if (!event) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Event create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get event list */
const getEventList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { event_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await eventService.getEventList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get event list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete event */
const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const eventExists = await eventService.getEventById(eventId);
    if (!eventExists) {
      throw new Error("Event not found!");
    }
    await eventService.deleteEvent(eventId);

    res.status(200).json({
      success: true,
      message: "Event delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update event */
const updateEvent = async (req, res) => {
  try {
    const reqBody = req.body;
    const eventId = req.params.eventId;
    const eventExists = await eventService.getEventById(eventId);
    if (!eventExists) {
      throw new Error("Event not found!");
    }
    await eventService.updateDetails(eventId,reqBody);

    res.status(200).json({
      success: true,
      message: "Event update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createEvent,
  getEventList,
  deleteEvent,
  updateEvent
};