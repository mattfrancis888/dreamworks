// const Pool = require('pg').Pool
import { Pool } from "pg";
console.log("USER", process.env.elephantSQLUser);
console.log("host", process.env.elephantSQLServer);
console.log("database", process.env.elephantSQLDatabase);
console.log("password", process.env.elephantSQLPassword);
const pool = new Pool({
    user: process.env.elephantSQLUser,
    host: process.env.elephantSQLServer,
    database: process.env.elephantSQLDatabase,
    password: process.env.elephantSQLPassword,
    port: 5432,
});
pool.on("error", (err) => {
    // tslint:disable-next-line no-console
    console.error("PostgreSQL client generated error: ", err.message);
});
export default pool;
