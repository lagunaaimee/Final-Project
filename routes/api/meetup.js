const router = require("express").Router();
const meetupController = require("../../controllers/meetupController");

// Matches with "/api/meetup"
router.route("/")
  .get(meetupController.findAll)
  .post(meetupController.create);

// Matches with "/api/meetup/:id"
router
  .route("/:id")
  .get(meetupController.findById)
  .put(meetupController.update)
  .delete(meetupController.remove);

module.exports = router;
