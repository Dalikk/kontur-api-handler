export interface IProductRestItem {
  productId: string;
  rest: number;
}

export interface IProduct {
  id: string;
  shopId: string;
  productType: string;
  code: number;
  name: string;
  unit: string;
  groupId: string;
  barcodes: string[];
  taxSystem: string;
  vatRate: string;
  sellPricePerUnit: string;
}

export interface IProductRestDetailed extends IProductRestItem {
  name: string;
  type: string;
  price: string;
}
