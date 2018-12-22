const db = require("../models");
const axios = require("axios")

// Defining methods for the meetupsController
module.exports = {
  findAll: function (req, res) {

    axios.get('https://api.meetup.com/find/groups?&sign=true&photo-host=public&location=TucsonAZ&category=34&page=20&key=215c2c2e25187a5176192f7b4e3c4474')
      .then(result => {
        //console.log(result)
        var emptyArray = [];
        //loop here
        for (i = 0; i < result.data.length; i++) {
          //in loop fill data for single entry
          var obj = {
            name: result.data[i].name,
            link: result.data[i].link,
            //description: result.data[i].description,
            city: result.data[i].city,
            state: result.data[i].state,
            who: result.data[i].who
          }
          console.log(obj)
          //push entry to empty array
          emptyArray.push(obj)  
          //db.Meetup.create(obj).then(resl => {  }).catch(err => res.status(422).json(err));
          //db.meetup.create with new array
        }
        db.Meetup.create(emptyArray).then(resl => { res.json(resl) })
      })

      .catch(err => {
        console.log(err)
        res.end()
      });
  },
  create: function (req, res) {
    db.Meetup
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Meetup
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Meetup
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
