const express = require("express");
const http = require('http');
const cors = require('cors');
const paphos = require("paphos-core");
const  bodyParser = require('body-parser');
require("dotenv").config();
const async = require("async");
const config = require("./config.js");
const PORT = process.env.PORT || 3001;

const app = {
  log: paphos.log(config),
  config: config,
};

exports.init = function (next) {
  var startDate = Date.now();
  app.log.debug("Initializing", config.get("env"), "configuration...");
  app.log.info(
    'Configuration "' + config.get("env") + '" successfully loaded in',
    Date.now() - startDate,
    "ms"
  );
};

exports.start = function (next) {
  app.server = express();
  app.httpServer = http.createServer(app.server);

  var corsOptionsDelegate = function (req, callback) {
    var corsOptions = {};
    corsOptions.origin = true;
    corsOptions.credentials = true;
    corsOptions.exposedHeaders = ["x-total-count"];
    callback(null, corsOptions);
  };
  app.server.use(cors(corsOptionsDelegate));
  app.server.use(bodyParser.json({ limit: "50mb" }));
  app.server.use(bodyParser.urlencoded({ extended: false }));

  app.server.use(function (req, res, next) {
    req.app = app;
    next();
  });

  app.log.debug("Http server starting at", config.get("http.port"), "...");

  app.httpServer.listen(config.get("http.port"), next);
};
