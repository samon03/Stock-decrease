import { Product } from './product';

export class Cart {
  id: number;
  productId: number;
  productTitle: string;
  productPrice: number;
  qty: number;

  constructor(id, product: Product, qty = 1) {
    this.id = id;
    this.productId = product.id;
    this.productTitle = product.title;
    this.productPrice = product.price;
    this.qty = qty;
  }
}
