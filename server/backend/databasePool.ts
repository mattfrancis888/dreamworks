// const Pool = require('pg').Pool
import { Pool } from "pg";
console.log(process.env.user);
const pool = new Pool({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: 5432,
});
