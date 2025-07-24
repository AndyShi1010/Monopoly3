import path from 'path';
import { fileURLToPath } from 'url';
import session from "express-session";
import express, {Express, Request, Response, NextFunction} from 'express';
import createHttpError from "http-errors";
import ViteExpress from 'vite-express';
import 'dotenv/config' 
import cors from "cors";

import db from "./db.ts";

import users from "./database/users.ts"; 


import pgSession from "connect-pg-simple";

const app = express();

const port = 3000;
const host = "localhost";

const server = app.listen(port, host);

// // Configure session
// const pgSessionInstance = pgSession(session);
// const sessionMiddleware = session({
//   store: new pgSessionInstance({ pgPromise: db }),
//   secret: process.env.SECRET || "",
//   resave: false,
//   saveUninitialized: false,
//   cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
// });
// app.use(sessionMiddleware);

// app.use(cors({
//   origin: ["http://localhost:3000"], // Allow only the react app (the provided URL) to make requests to the API
//   methods: ["GET", "POST"], // Methods we want to allow
//   credentials: true, // Allow cookies to be enabled and stored in the browser
// }));


// app.use((_req: Request, _res: Response, next: NextFunction) => {
//   next(createHttpError(404));
// });

ViteExpress.listen(app, 3000, () =>
  console.log('Server is listening at http://localhost:3000')
);


// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.post('/api/createUser', async (req, res) => {
  console.log("API: create_user")

  try {
    const { id } = await users.create("UserA", "abc123");
    res.json({ message: "Registration successful", success: true, id: id });
  } catch (e) {
    res.status(400).json({error: e})
  }
  res.json({ message: 'Hello from Express!' });
});