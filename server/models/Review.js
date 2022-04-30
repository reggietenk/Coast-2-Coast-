const { Schema, model } = require('mongoose');
const locationSchema = require('./Location');
const dateFormat = require('../utils/dateFormat');

const reviewSchema = new Schema(
  {
    reviewBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    createdAt: {
			type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
		username: {
			type: String,
			required: true
		},
		location: [locationSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Review = model('Review', reviewSchema);

module.exports = Review;
