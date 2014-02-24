"use strict";

var qhttp = require("q-io/http");

qhttp.read("http://localhost:1337")
  .then(JSON.parse)
  .then(console.log);
