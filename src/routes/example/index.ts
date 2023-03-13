import express from 'express';
// import { PATH_ASSETS } from '../../index';

const PORT = process.env.PORT_NUMBER ?? 3000;

const router = express.Router();

router.get('/', (_req, res) => { // _req is unused
  const today = new Date().toLocaleDateString();
  res.send(`Today is ${today} and this petition was called using Express.js with the url http://localhost:${PORT}/ `);
});

router.get('/example/with-html', (_req, res) => {
  res.send(`
    <h1>Example with HTML</h1>
    <p>Today is ${new Date().toLocaleDateString()}</p>
`);
});

router.get('/with-json', (_req, res) => {
  res.json({
    date: new Date().toLocaleDateString(),
    message: 'Example with JSON'
  });
});

router.get('/example/with-params/:id', (req, res) => {
  res.send(`The id is ${req.params.id} and the type is ${typeof req.params.id}. These values are passed as parameters in the url.`);
});

router.get('/with-image', (_req, res) => {
  // console.log('PATH_PUBLIC', PATH_ASSETS);
  // res.sendFile(`${PATH_ASSETS}/image.jpg`);
  res.sendFile('./assets/image.jpg', { root: 'dist' });
});

export default router;
