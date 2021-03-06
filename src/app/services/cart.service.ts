import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

const productUrl = "http://localhost:3000/products";

const cartUrl = "http://localhost:3000/carts";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  stock;

  constructor(private http: HttpClient,
    private productService: ProductService) { }

  getCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(cartUrl).pipe(
      map((result: any[]) => {

        let cartItems: Cart[] = [];

        for(let item of result)
        {
              let productExists = false;

              for(let i in cartItems)
              {
                  if(cartItems[i].productId === item.product.id)
                  {
                    cartItems[i].qty++;
                    productExists = true;
                    break;
                  }
              }

              if(!productExists)
              {
                  cartItems.push(new Cart(item.id, item.product));
              }
        }
        return cartItems;
      })
    );
  }

  postCartItem(product: Product): Observable<any>
  {
    product.stock = product.stock - 1;
    this.productService.putProduct(product).subscribe();
    return this.http.post(cartUrl, {product});
  }
}
