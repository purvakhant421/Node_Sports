const { contactusService } = require("../services");

/** create contactus */
const createContactus = async (req, res) => {
  try {
    const reqBody = req.body;
    const contactus = await contactusService.createContactus(reqBody);
    if (!contactus) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Contactus create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get contactus list */
const getContactusList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { organizationName: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await contactusService.getContactusList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get contactus list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete contactus */
const deleteContactus = async (req, res) => {
  try {
    const contactusId = req.params.contactusId;
    const contactusExists = await contactusService.getContactusById(contactusId);
    if (!contactusExists) {
      throw new Error("Contactus not found!");
    }
    await contactusService.deleteContactus(contactusId);

    res.status(200).json({
      success: true,
      message: "Contactus delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update contactus */
const updateContactus = async (req, res) => {
  try {
    const reqBody = req.body;
    const contactusId = req.params.contactusId;
    const contactusExists = await contactusService.getContactusById(contactusId);
    if (!contactusExists) {
      throw new Error("Contactus not found!");
    }
    await contactusService.updateDetails(contactusId,reqBody);

    res.status(200).json({
      success: true,
      message: "Contactus update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createContactus,
  getContactusList,
  deleteContactus,
  updateContactus
};