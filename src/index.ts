import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes';

dotenv.config(); // load .env file

const PATH_SRC = __dirname; // path to src folder
const PORT = process.env.PORT_NUMBER ?? 3000;

const app = express();

app.use(express.json()); // for parsing application/json - transform req.body to json

app.listen(PORT, () => { // start the Express server
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

app.get('/', (_req, res) => { // _req is unused
  const today = new Date().toLocaleDateString();
  res.send(`Today is ${today} and this petition was called using Express.js with the url http://localhost:${PORT}/ `);
});

app.get('/example/with-html', (_req, res) => {
  res.send(`
    <h1>Example with HTML</h1>
    <p>Today is ${new Date().toLocaleDateString()}</p>
  `);
});

app.get('/example/with-json', (_req, res) => {
  res.json({
    date: new Date().toLocaleDateString(),
    message: 'Example with JSON'
  });
});

app.get('/example/with-params/:id', (req, res) => {
  res.send(`The id is ${req.params.id} and the type is ${typeof req.params.id}. These values are passed as parameters in the url.`);
});

app.get('/example/with-image', (_req, res) => {
  res.sendFile(`${PATH_SRC}/assets/image.jpg`);
});


// User Routes
app.use('/api/users', routes.userRouter);
