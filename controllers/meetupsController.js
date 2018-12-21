const db = require("../models");
const axios = require("axios")

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {

    axios.get('https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=-110.911789&topic_category=tech&page=20&lat=32.253460')
      .then(result => {
        console.log(result.data)
        res.json(result.data)
        // ^^^ last line/under everything else
        // parse result.date to find desired elements and store in new object
        // the new object's properties should match columns in DB
        // Use Mongoose to add new object into DB
        // In .then, run the res.json to send data back

        // db.Meetups
    //   .find(req.query)
    //   .sort({ date: -1 })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
      })
      .catch(err => {
        console.log(err)
        res.end()
      });

    
  },

  findById: function (req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
