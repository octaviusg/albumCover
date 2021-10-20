const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    catNum: {
      type: String,
    },
    genre: {
      type: String,
    },
    title: {
      type: Array,
      default: [],
    },
    masterUrl: {
      type: String,
    },
    trackList: {
      type: Array,
      default: [],
    },
    catNumber: {
      type: String,
    },
    year: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
