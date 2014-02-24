"use strict";

var q = require("q");

function printError(err) {
  console.log(err.message);
}

var defer = q.defer();

defer.promise.then(console.log, printError);

setTimeout(defer.reject, 300, new Error("REJECTED!"));
