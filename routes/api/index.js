const router = require("express").Router();
const meetupRoutes = require("./meetups");
const resourcesRoutes = require("./resources");
// Meetup routes
router.use("/meetups", meetupRoutes);
router.use("/resources", resourcesRoutes);

module.exports = router;
