import * as API from '../../apiKontur';
import { IProductRestDetailed } from '../../types';

export const getDetailedProductRests = async () => {
  const productRests = await API.products.getProductRests();
  const allProducts = await API.products.getProductsList();
  const detailedProductRests: IProductRestDetailed[] = productRests.map(
    (product) => {
      const correspondingProduct = allProducts.find(
        (el) => el.id === product.productId,
      );
      return {
        ...product,
        name: correspondingProduct?.name,
        type: correspondingProduct?.productType,
        price: correspondingProduct?.sellPricePerUnit,
      };
    },
  );
  return detailedProductRests;
};
