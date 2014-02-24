"use strict";

var q = require("q");

function all(p1, p2) {
  var d = q.defer(),
      c = 0,
      v1, v2;

  p1.then(function (r) {
    v1 = r;
    c += 1;
    if (c >= 2) {
      d.resolve([v1, v2]);
    }
  }).then(null, d.reject);

  p2.then(function (r) {
    v2 = r;
    c += 1;
    if (c >= 2) {
      d.resolve([v1, v2]);
    }
  }).then(null, d.reject);

  return d.promise;
}

var d1 = q.defer(),
    d2 = q.defer();

all(d1.promise, d2.promise)
  .then(console.log);

//q.all([d1.promise, d2.promise])
  //.then(console.log);

//q.spread([d1.promise, d2.promise], console.log);

setTimeout(function () {
  d1.resolve("PROMISES");
  d2.resolve("FTW");
}, 200);
