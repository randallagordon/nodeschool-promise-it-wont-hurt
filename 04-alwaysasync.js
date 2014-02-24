"use strict";

var q = require("q");

var defer = q.defer();

defer.promise.then(console.log, console.log);

defer.resolve("SECOND");
console.log("FIRST");
