const { founderService } = require("../services");

/** create founder */
const createFounder = async (req, res) => {
  try {
    const reqBody = req.body;
    const founder = await founderService.createFounder(reqBody);
    if (!founder) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Founder create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get founder list */
const getFounderList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Founder_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await founderService.getFounderList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get founder list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete founder */
const deleteFounder = async (req, res) => {
  try {
    const founderId = req.params.founderId;
    const founderExists = await founderService.getFounderById(founderId);
    if (!founderExists) {
      throw new Error("founder not found!");
    }
    await founderService.deleteFounder(founderId);

    res.status(200).json({
      success: true,
      message: "Founder delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update founder */
const updateFounder = async (req, res) => {
  try {
    const reqBody = req.body;
    const founderId = req.params.founderId;
    const founderExists = await founderService.getFounderById(founderId);
    if (!founderExists) {
      throw new Error("Founder not found!");
    }
    await founderService.updateDetails(founderId,reqBody);

    res.status(200).json({
      success: true,
      message: "Founder update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createFounder,
  getFounderList,
  deleteFounder,
  updateFounder
  
};