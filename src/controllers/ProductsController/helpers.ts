import * as API from '../../apiKontur';
import { IProductRestDetailed } from '../../types';

export const getDetailedProductsRest = async () => {
  const productRests = await API.products.getProductRests();
  const productsWithName: Array<IProductRestDetailed> = await Promise.all(
    productRests.map(async (product) => {
      const fullProduct = await API.products.getOneProduct(product.productId);
      return {
        ...product,
        name: fullProduct.name,
        type: fullProduct.productType,
        price: fullProduct.sellPricePerUnit,
      };
    }),
  );
  return productsWithName;
};
