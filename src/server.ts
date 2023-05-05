import * as express from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

import * as ProductsController from './controllers/ProductsController/';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ msg: 'hello world' });
});

app.get('/product/list', ProductsController.getAllProducts);
app.get('/product/rests', ProductsController.getProductRests);
app.get('/product/rests/filtered', ProductsController.filteredProducts);
app.get('/product/:id', ProductsController.getOneProduct);

app.listen(3002, () => {
  // eslint-disable-next-line no-console
  console.log(`Express app started at http://localhost:3002`);
});
