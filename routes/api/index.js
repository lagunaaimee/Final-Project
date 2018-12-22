const router = require("express").Router();
const meetupRoutes = require("./meetups");

// Meetup routes
router.use("/meetups", meetupRoutes);

module.exports = router;
