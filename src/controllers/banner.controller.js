const fs = require("fs");
const { bannerService } = require("../services");

/** Create Banner */
const createBanner = async (req, res) => {
  try {
    const reqbody = req.body;

    if (req.file) {
      reqbody.sports_image = req.file.filename;
    } else {
      throw new Error("Banner image is required ! ");
    }
    const banner = await bannerService.createBanner(reqbody);

    res.status(200).json({
      success: true,
      message: "Banner create successfully ! ",
      data: banner,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later ! ",
    });
  }
};

/** Get Banner list */
const getbannerlist = async (req, res) => {
  try {
    const bannerlist = await bannerService.getbannerlist();

    res.status(200).json({
      success: true,
      message: "Banner list dispatch successfully ! ",
      data: bannerlist,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later ! ",
    });
  }
};

module.exports = {
  createBanner,
  getbannerlist,
};