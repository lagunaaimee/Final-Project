const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetupSchema = new Schema({
  name: { 
    type: String, 
    trim: true,
    required: true
  },

  link: {
    type: String, 
    trim: true, 
    required: true
  },

  description: {
    type: String
    // validate: [
    //   function(description) {
    //     return description.length;
    //   }
    // ]
  },

  city: {
    type: String, 
    trim: true,
    required: true
  },

  state: {
    type: String, 
    trim: true, 
    required: true
  },
  
  who: {
    type: String, 
    trim: true, 
    required: true
  },

})

const Meetup = mongoose.model("Meetup", meetupSchema);

module.exports = Meetup;