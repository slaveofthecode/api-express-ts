import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { routes } from './routes';

// load .env file
dotenv.config();

const PORT = process.env.PORT_NUMBER ?? 3000;

// export const PATH_STYLES = path.join(__dirname, '/styles');
// export const PATH_ASSETS = path.join(__dirname, '/assets');

const app = express();

app.use(cors()); // enable cors

// engine views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app configuration
app.use(express.json()); // for parsing application/json - transform req.body to json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded - transform req.body to json
// app.use(express.static(path.join(__dirname, 'public'))); // for serving static files (css, js, images, etc.
app.use(express.static('public')); // for serving static files (css, js, images, etc.
// app.use('/styles', express.static(PATH_STYLES)); // for serving static files (css, js, images, etc.
// app.use('/assets', express.static(PATH_ASSETS)); // for serving static files (css, js, images, etc.

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
