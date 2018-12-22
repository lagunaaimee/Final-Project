const db = require("../models");
const axios = require("axios")

// Defining methods for the meetupsController
module.exports = {
  findAll: function (req, res) {

    axios.get('https://api.meetup.com/find/groups?&sign=true&photo-host=public&location=TucsonAZ&category=34&page=20&key=215c2c2e25187a5176192f7b4e3c4474')
      .then(result => {
        res.json(result.data)
      })
      .catch(err => {
        console.log(err)
        res.end()
      });
  },
  create: function (req, res) {
    db.Meetups
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
}