//Dependencies
const express = require("express");
var mongojs = require("mongojs");
//Makes scrapping happen
var cheerio = require("cheerio");
var request = require("request");
//Initializes Express
var app = express();

//??
// const db = require("../models");

//Database config
var databaseURL = "resources";
var collections = ["reddit", "hackerNews"];
//Includes mongojs config to the db var
var db = mongojs(databaseURL, collections);
db.on("error", function (error) {
  console.log("DB error:", error);
});

// Retrieve data from the db
app.get("/all", function (req, res) {
  // Find all results from the scrapedData collection in the db
  db.Resources.find({}, function (error, found) {
    // Throw any errors to the console
    if (error) {
      console.log(error);
    }
    // If there are no errors, send the data to the browser as json
    else {
      res.json(found);
    }
  });
});
// Scrape data from one site and place it into the mongodb db
app.get("/scrape", function (req, res) {
  // Make a request for the news section of `reddit`
  request("https://old.reddit.com/r/webdev/", function (error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    // Make an empty array for saving our scraped info
    var results = [];

    // For each element with a "title" class
    $("p.title").each(function (i, element) {
      // Save the text and href of each link enclosed in the current element
      var title = $(element).text();
      var link = $(element).children().attr("href");
      // Save these results in an object that we'll push into the results array we defined earlier
      results.push({
        title: title,
        link: link
      });
    });
    console.log(results);
  });
  
});

// Defining methods for the resourcesController
module.exports = {
  findAll: function (req, res) {
    db.Resources
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Resources
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Resources
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Resources
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Resources
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
