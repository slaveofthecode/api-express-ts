import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { routes } from './routes';

// load .env file
dotenv.config();

const PORT = process.env.PORT_NUMBER ?? 3000;

const app = express();

app.use(express.json()); // for parsing application/json - transform req.body to json
app.use(cors()); // enable cors

// engine views
app.set('view engine', 'pug');
// structure folder must be
// - src
// - views
//   - index.pug

app.use(express.static('css'));

// User Routes
app.use('/api/example', routes.exampleRouter);
app.use('/api/users', routes.userRouter);
app.get('/', (_req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!', name: 'Gustavo' });
});

// start the Express server
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
