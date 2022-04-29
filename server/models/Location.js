const { Schema } = require('mongoose');

const locationSchema = new Schema(
  {
    lon: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    }
  }
);

module.exports = locationSchema;
