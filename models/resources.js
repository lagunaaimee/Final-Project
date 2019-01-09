const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourcesSchema = new Schema({
  title: {
    type: String, 
    required: true
  },

  link: {
    type: String, 
    required: true
  },

});

const Resources = mongoose.model("Resources", resourcesSchema);

module.exports = Resources;