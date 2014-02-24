"use strict";

var q = require("q");

function parsePromised(json) {
  var defer = q.defer();

  try {
    defer.resolve(JSON.parse(json));
  } catch (e) {
    defer.reject(e);
  }

  return defer.promise;
}

parsePromised(process.argv[2]).then(null, console.log);
