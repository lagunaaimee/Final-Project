//Dependencies
const express = require("express");
//var mongojs = require("mongojs");
//Makes scrapping happen
var cheerio = require("cheerio");
var request = require("request");
//Initializes Express
var app = express();

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
  }
};
