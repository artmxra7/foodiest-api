const { foodService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const pick = require("../utils/pick");
const getFood = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["name", "role"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await foodService.queryFoods(filter, options);
  res.send(result);
});

module.exports = {
  getFood,
};