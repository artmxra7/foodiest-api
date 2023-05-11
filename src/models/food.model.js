const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const foodSchema = mongoose.Schema({
  foodID: {
    type: Number,
  },
  foodCategory: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
  },
  foodDescription: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// add plugin that converts mongoose to json
foodSchema.plugin(toJSON);
foodSchema.plugin(paginate);

/**
 * @typedef Food
 */
const Food = mongoose.model("food", foodSchema);

module.exports = Food;
