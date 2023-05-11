const { Food } = require("../models");
const queryFoods = async (filter, options) => {
  const foods = await Food.paginate(filter, options);
  return foods;
};
module.exports = {
  queryFoods,
};