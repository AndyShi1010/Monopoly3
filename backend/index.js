import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import ViteExpress from 'vite-express';

const app = express();

const port = 3000;
const host = "localhost";

const server = app.listen(port, host);

// Serve frontend via Vite in dev or built files in prod
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ViteExpress.config({
//   root: path.resolve(__dirname, '../frontend'),
//   mode: "development"
// });

console.log(path.resolve(__dirname, '../frontend'))

// ViteExpress.bind(app, server, async () => {
//   const { root, base } = await ViteExpress.getViteConfig();
//   console.log(`Serving app from root ${root}`);
//   console.log(`Server is listening at http://${host}:${port}${base}`);
// });

ViteExpress.listen(app, 3000, () =>
  console.log('Server is listening at http://localhost:3000')
);

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});
