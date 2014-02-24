"use strict";

var q = require("q");

function attachTitle(name) { return "DR. " + name; }

var defer = q.defer();

defer.promise
  .then(attachTitle)
  .then(console.log);

defer.resolve("MANHATTAN");
