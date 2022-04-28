const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Review = new Schema(
  {
    reviewBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    long: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = Review;
