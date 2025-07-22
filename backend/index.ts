import path from 'path';
import { fileURLToPath } from 'url';
import session from "express-session";
import express from 'express';
import ViteExpress from 'vite-express';
import 'dotenv/config' 

import db from "./db.ts";


import pgSession from "connect-pg-simple";

const app = express();

const port = 3000;
const host = "localhost";

const server = app.listen(port, host);

// Configure session
const pgSessionInstance = pgSession(session);
const sessionMiddleware = session({
  store: new pgSessionInstance({ pgPromise: db }),
  secret: process.env.SECRET || "",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
});
app.use(sessionMiddleware);

ViteExpress.listen(app, 3000, () =>
  console.log('Server is listening at http://localhost:3000')
);

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});
