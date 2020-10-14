"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const Pool = require('pg').Pool
var pg_1 = require("pg");
console.log(process.env.user);
var pool = new pg_1.Pool({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: 5432,
});
