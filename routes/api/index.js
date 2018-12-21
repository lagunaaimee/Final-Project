const router = require("express").Router();
const meetupRoutes = require("./meetups");

// Book routes
router.use("/meetups", meetupRoutes);

module.exports = router;
