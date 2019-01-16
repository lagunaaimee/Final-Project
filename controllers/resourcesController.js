//Dependencies
const express = require("express");

//var mongojs = require("mongojs");
//Makes scrapping happen
var cheerio = require("cheerio");
var request = require("request");
//Initializes Express
var app = express();
var snoowrap = require('snoowrap');
// const r = new snoowrap({
//   userAgent: 'Test App2',
//   clientId: 'yZc8xjFGzL8V-g',
//   clientSecret: 'NH_HXmijZQ0iBh__i0WB--cdZGc',
// // access_token: '148910835976-8Ugof8YUAfMst_9RbFC1ODeuC_4',
//   // token_type: 'bearer',
//   // expires_in: 3600,
//   refresh_token: '148910835976-hcS5tTKR2J9FwL-6plX7u42vkiY',
//   access_token: '148910835976-8Ugof8YUAfMst_9RbFC1ODeuC_4'
//   // scope:
//   //  'account creddits edit flair history identity livemanage modconfig modcontributors modflair modlog modmail modothers modposts modself modtraffic modwiki mysubreddits privatemessages read report save structuredstyles submit subscribe vote wikiedit wikiread'
// });

const r = new snoowrap({
  userAgent: 'Test App2',
  clientId: 'yZc8xjFGzL8V-g',
  clientSecret: 'NH_HXmijZQ0iBh__i0WB--cdZGc',
  username: 'gbrown9191',
  password: 'Orangeroad1!',
  scope: "account creddits edit flair history identity livemanage modconfig modcontributors modflair modlog modmail modothers modposts modself modtraffic modwiki mysubreddits privatemessages read report save structuredstyles submit subscribe vote wikiedit wikiread"
});
//??
const db = require("../models");

//Database config
var databaseURL = "finalproject";
var collections = ["resources"];
//Includes mongojs config to the db var

// Retrieve data from the db
// app.get("/all", function (req, res) {
//   // Find all results from the scrapedData collection in the db
//   db.Resources.find({}, function (error, found) {
//     // Throw any errors to the console
//     if (error) {
//       console.log(error);
//     }
//     // If there are no errors, send the data to the browser as json
//     else {
//       res.json(found);
//     }
//   });
// });

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
  },
  scrape: function (req, res) {
    
    console.log("HIT")
    r.getSubreddit('webdev').getNew().then(function (res2) { console.log(res2), res.json(res2) })


    // // Make a request for the news section of `reddit`
    // request("https://old.reddit.com/r/webdev/", function (error, response, html) {
    //   console.log(html)
    //   // Load the html body from request into cheerio
    //   var $ = cheerio.load(html);
    //   // Make an empty array for saving our scraped info
    //   var results = [];

    //   // For each element with a "title" class
    //   $("a.title").each(function (i, element) {
    //     // Save the text and href of each link enclosed in the current element
    //     //console.log($(element).children("a").children("p"))
    //     var title = $(element).text();

    //     //var link = $(element).children("a").attr("href");
    //     // Save these results in an object that we'll push into the results array we defined earlier
    //     results.push({
    //       title: title,
    //       //link: link
    //     });
    //     //console.log(results)
    //     // Bulk Insert Data into collection
    //   });
    //   //console.log(results)
    //   // db.Resources.collection.insert(results[0], function (err, docs) {
    //   //   if (err) {
    //   //     console.log(err)
    //   //   } else {
    //   //     for (i = 0; i < results.length; i++) {
    //   //       text += "The number is " + i + "<br>";
    //   //     }
    //   //     console.info('%d potatoes were successfully stored.', docs.length);
    //   //   }
    //   // }) 

    //   //console.log(results);

    //   res.json(500);
    // });


  }
};
