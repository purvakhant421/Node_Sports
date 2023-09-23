const express = require("express");
const { newsValidation } = require("../validations");
const { newsController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create news */
router.post(
  "/create-news",
  validate(newsValidation.createNews),
  newsController.createNews
);

/** news list */
router.get(
  "/list",
  newsController.getNewsList
)

router.delete(
  "/delete/:newsId",
  newsController.deleteNews
)

router.put(
  "/update-news/:newsId",
  newsController.updateNews
)

module.exports = router;