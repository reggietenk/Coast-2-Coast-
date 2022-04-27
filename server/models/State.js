const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const stateSchema = new Schema(
  {
    stateText: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

stateSchema.virtual('reviewCount').get(function() {
  return this.reviews.length;
});

const State = model('Review', stateSchema);

module.exports = State;
