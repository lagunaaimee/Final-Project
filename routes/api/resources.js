const router = require("express").Router();
const resourcesController = require("../../controllers/resourcesController");

//const mongoose = require("mongoose");

// Matches with "/api/resources"
router.route("/")
  .get(resourcesController.findAll)
  .post(resourcesController.create);

  router.route("/scrape")
  .get(resourcesController.scrape);
// Matches with "/api/resources/:id"
// router
//   .route("/:id")
//   .get(resourcesController.findById)
//   .put(resourcesController.update)
//   .delete(resourcesController.remove);

//const Resources = mongoose.model("Resources", resourcesSchema);
// Scrape data from one site and place it into the mongodb db


  module.exports = router;
