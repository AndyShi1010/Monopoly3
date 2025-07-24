import pgPromise, { IMain } from 'pg-promise';
import 'dotenv/config' 

console.log(process.env.DATABASE_URL)

if (!process.env.DATABASE_URL) {
  throw new Error('Database URL is not defined correctly in env');
}

const pgp: IMain = pgPromise();

const db = pgp({
    connectionString: process.env.DATABASE_URL,
    max: 10, // Maximum number of connections in the pool
    idleTimeoutMillis: 30000, // How long a connection is allowed to be idle (in milliseconds)
    connectionTimeoutMillis: 2000, // How long to wait for a connection to become available (in milliseconds)})
})

export default db