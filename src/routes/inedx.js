const express = require("express");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const productRoute = require("./product.route");
const founderRoute = require("./founder.route");
const contactusRoute = require("./contactus.route");
const teamRoute = require("./team.route");
const playerRoute = require("./player.route");
const eventRoute = require("./event.route");
const newsRoute = require("./news.route");



const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/product", productRoute);
router.use("/founder", founderRoute);
router.use("/contactus", contactusRoute);
router.use("/team", teamRoute);
router.use("/player", playerRoute);
router.use("/event", eventRoute);
router.use("/news", newsRoute);

module.exports = router;