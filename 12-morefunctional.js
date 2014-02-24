"use strict";

var qhttp = require("q-io/http"),
    _ = require("lodash");

function buildURIFromId(id) { return "http://localhost:7001/" + id; }

qhttp.read("http://localhost:7000/")
.then(_.compose(qhttp.read, buildURIFromId))
.then(JSON.parse)
.then(console.log);
