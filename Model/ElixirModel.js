const mongoose = require("mongoose");
const academicmodel = new mongoose.Schema({
  message: {
    type: String,
    require: false,
    trim: true,
  },
  name: {
    type: String,
    require: true,
    trim: true,
  },
  mail:{
    type: String,
    require: true,
    trim: true,
  },
  subject: {
    type: String,
    require: true,
    trim: true,
  },
});

module.exports = mongoose.model("academic_elixir", academicmodel);
