import axios from '../core/axios';
import { IProduct, IProductRestItem } from '@/types';

export const getOneProduct = async (id: string) => {
  const product: IProduct = (await axios.get(`/products/${id}`)).data;
  return product;
};

export const getProductsList = async () => {
  const productList: IProduct[] = (await axios.get('/products')).data.items;
  return productList;
};

export const getProductRests = async (): Promise<IProductRestItem[]> => {
  const productRests = await axios.get('/product-rests').then(({ data }) => {
    return data.items;
  });
  return productRests;
};
