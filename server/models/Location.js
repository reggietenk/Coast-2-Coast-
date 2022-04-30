const { Schema } = require('mongoose');

const locationSchema = new Schema(
  {
		lat: {
			type: Number,
			required: true,
		},
    lon: {
      type: Number,
      required: true,
    }
  }
);

module.exports = locationSchema;
