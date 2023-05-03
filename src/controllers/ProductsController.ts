import axios from '../core/axios';
import { IProduct, IProductRestDetailed, IProductRestItem } from '@/types';
import { Response } from 'express';

const getOneProductItem = async (id: string) => {
  const product: IProduct = (await axios.get(`/products/${id}`)).data;
  return product;
};

export const getProductsRest = async (req, res) => {
  const products: Array<IProductRestItem> = (await axios.get('/product-rests'))
    .data.items;
  const productsWithName: Array<IProductRestDetailed> = await Promise.all(
    products.map(async (product) => {
      const fullProduct = await getOneProductItem(product.productId);
      return {
        ...product,
        name: fullProduct.name,
        type: fullProduct.productType,
        price: fullProduct.sellPricePerUnit,
      };
    }),
  );
  return res.json(productsWithName);
};

export const getOneProduct = async (req, res: Response<IProduct>) => {
  const productId = req.params.id;
  const product = await getOneProductItem(productId);
  return res.json(product);
};
