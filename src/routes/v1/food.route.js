const express = require("express");
const { foodController } = require("../../controllers");
const router = express.Router();
// Matches with "/api/food"
router.route("/").get(foodController.getFood);
  module.exports = router;