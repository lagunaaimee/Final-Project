const router = require("express").Router();
const meetupsController = require("../../controllers/meetupsController");

// Matches with "/api/meetups"
router.route("/")
  .get(meetupsController.findAll)
  .post(meetupsController.create);

// Matches with "/api/meetups/:id"
router
  .route("/:id")
  // .get(meetupsController.findById)
  .put(meetupsController.update)
  .delete(meetupsController.remove);

module.exports = router;
