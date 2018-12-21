const router = require("express").Router();
const forumController = require("../../controllers/forumController");

// Matches with "/api/forum"
router.route("/")
  .get(forumController.findAll)
  .post(forumController.create);

// Matches with "/api/forum/:id"
router
  .route("/:id")
  .get(forumController.findById)
  .put(forumController.update)
  .delete(forumController.remove);

module.exports = router;
