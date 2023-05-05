import { Request, Response } from 'express';
import { IProduct, IProductRestDetailed } from '@/types';
import { getDetailedProductsRest } from './helpers';

import * as API from '../../apiKontur';

export const getAllProducts = async (req, res) => {
  const products: IProduct[] = await API.products.getProductsList();
  return res.json(products);
};

export const getProductRests = async (
  req: Request,
  res: Response<IProductRestDetailed[]>,
) => {
  const products = await getDetailedProductsRest();
  return res.json(products);
};

export const filteredProducts = async (
  req: Request<
    NonNullable<unknown>,
    NonNullable<unknown>,
    NonNullable<unknown>,
    { name: string }
  >,
  res: Response<IProductRestDetailed[]>,
) => {
  const filterName = req.query.name;
  const products = await getDetailedProductsRest();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filterName),
  );
  return res.json(filteredProducts);
};

export const getOneProduct = async (
  req: Request<{ id: string }>,
  res: Response<IProduct>,
) => {
  const productId = req.params.id;
  const product = await API.products.getOneProduct(productId);
  return res.json(product);
};
