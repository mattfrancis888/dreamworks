"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var conString = process.env.elephantSQLURI; //Can be found in the Details page
var client = new pg_1.Client(conString);
exports.default = client;
client.connect(function (err) {
    if (err) {
        return console.error("could not connect to postgres", err);
    }
});
