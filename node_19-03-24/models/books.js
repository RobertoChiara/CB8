const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "No Title",
  },
  author: {
    type: String,
    required: true,
    default: "No Author",
  },
  genre: {
    type: String,
    required: false,
    default: "No Genre",
  },
  year: {
    type: Date,
    required: true,
    default: 0,
  },
  cover: {
    type: String,
    required: false,
    default: "No cover",
  },
});

module.exports = mongoose.model("Book", bookSchema);
