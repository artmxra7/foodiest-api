const express = require("express");
// const authRoute = require("./auth.route");
// const userRoute = require("./user.route");
const docsRoute = require("./docs.route");
// const foodRoute = require("./food.route");
const config = require("../../config/config");

const router = express.Router();

const defaultRoutes = [
  // {
  //   path: "/auth",
  //   route: authRoute,
  // },
  // {
  //   path: "/users",
  //   route: userRoute,
  // },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: "/docs",
    route: docsRoute,
  },
  // {
    // path: "/food",
    // route: foodRoute,
  // },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === "development") {
  devRoutes.forEach((route) => {
    console.log(route.path, route.route);
    router.use(route.path, route.route);
  });
}

module.exports = router;
