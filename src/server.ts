import * as express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ msg: 'hello world' });
});

app.listen(3002, () => {
  console.log(`Express app started at http://localhost:3002`);
});
