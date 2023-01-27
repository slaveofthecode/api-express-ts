import express from 'express';

const PORT = 3000;
const app = express();

app.use(express.json()); // for parsing application/json - transform req.body to json

app.get('/', (_req, res) => { // _req is unused
  res.send('Hello World!');
});

app.listen(PORT, () => { // start the Express server
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});


