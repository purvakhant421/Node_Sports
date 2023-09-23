const { newsService } = require("../services");

/** create news */
const createNews = async (req, res) => {
  try {
    const reqBody = req.body;
    const news = await newsService.createNews(reqBody);
    if (!news) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "News create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get News list */
const getNewsList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { headline: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await newsService.getnewsList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get News list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete news */
const deleteNews = async (req, res) => {
  try {
    const newsId = req.params.newsId;
    const newsExists = await newsService.getNewsById(newsId);
    if (!newsExists) {
      throw new Error("news not found!");
    }
    await newsService.deleteNews(newsId);

    res.status(200).json({
      success: true,
      message: "News delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update news */
const updateNews = async (req, res) => {
  try {
    const reqBody = req.body;
    const newsId = req.params.newsId;
    const newsExists = await newsService.getNewsById(newsId);
    if (!newsExists) {
      throw new Error("News not found!");
    }
    await newsService.updateDetails(newsId,reqBody);

    res.status(200).json({
      success: true,
      message: "News update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createNews,
  getNewsList,
  deleteNews,
  updateNews
  
};