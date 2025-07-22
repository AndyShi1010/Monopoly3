import { Pool } from "pg";
import pgPromise, { IMain } from 'pg-promise';
import 'dotenv/config' 

console.log(process.env.DATABASE_URL)

if (!process.env.USER || !process.env.HOST || !process.env.DATABASE_NAME || !process.env.PASSWORD || !process.env.PORT) {
  throw new Error('Env is not configured correctly');
}

const pgp: IMain = pgPromise();

const db = pgp({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    max: 10, // Maximum number of connections in the pool
    idleTimeoutMillis: 30000, // How long a connection is allowed to be idle (in milliseconds)
    connectionTimeoutMillis: 2000, // How long to wait for a connection to become available (in milliseconds)})
})

export default db