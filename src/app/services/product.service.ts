import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

const productUrl = "http://localhost:3000/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(productUrl);
  }

  putProduct(product: Product): Observable<Product[]>{
    return this.http.put<Product[]>(`${productUrl}/${product.id}`, product);
  }
}
