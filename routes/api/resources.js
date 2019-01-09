const router = require("express").Router();
const resourcesController = require("../../controllers/resourcesController");
var cheerio = require("cheerio");
var request = require("request")

// Matches with "/api/resources"
router.route("/")
  .get(resourcesController.findAll)
  .post(resourcesController.create);

// Matches with "/api/resources/:id"
// router
//   .route("/:id")
//   .get(resourcesController.findById)
//   .put(resourcesController.update)
//   .delete(resourcesController.remove);

// Scrape data from one site and place it into the mongodb db
router.route("/scrape").get(function (req, res) {
  // Make a request for the news section of `reddit`
  request("https://old.reddit.com/r/webdev/", function (error, response, html) {
    console.log(html)
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    // Make an empty array for saving our scraped info
    var results = [];

    // For each element with a "title" class
    $("p.title").each(function (i, element) {
      // Save the text and href of each link enclosed in the current element
      console.log($(element).children("a").children("p"))
      var title = $(element).text();
      var link = $(element).children("a").attr("href");
      // Save these results in an object that we'll push into the results array we defined earlier
      results.push({
        title: title,
        link: link
      });
      
    });
    console.log(results);
  });
  
});
 

module.exports = router;
 